import { faSearch, faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  type ChangeEvent,
  type FocusEvent,
  type MouseEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from "react"
import useOnclickOutside from "react-cool-onclickoutside"
import useKeypress from "react-use-keypress"

import { Chip } from "./Chip"
import { ChoiceItem } from "./ChoiceItem"
import {
  addSelectedChoice,
  getChoiceIndex,
  removeSelectedChoice,
  resolvePanelWidth,
} from "./searchPanelUtils"
import styles from "./styles.module.css"

/**
 * Definition of a SearchPanelChoice.
 */
export interface SearchPanelChoice {
  /**
   * Key for a choice can be any unique string.
   * For link variant, recommend using a url.
   */
  key: string

  /**
   * The description that will be displayed in search results.
   */
  description: string
}

export enum SearchPanelVariant {
  /**
   * A multi-select variant where result items have checkboxes.
   */
  checkbox,

  /**
   * A variant where result items are anchor links.
   */
  link,

  /**
   * A single-select variant where result items have radio buttons.
   */
  radio,
}

/**
 * Definition of props for SearchPanel.
 */
export interface SearchPanelProps {
  /**
   * Display Chips to represent selected choices.
   */
  chips?: boolean

  /**
   * An array of choices to be displayed.
   */
  choices: SearchPanelChoice[]

  /**
   * Optional class name to be applied to the top level of the component.
   */
  className?: string

  /**
   * A label for clear button, should be provided if onClear is provided.
   */
  clearLabel?: string

  /**
   * Result list will float above content. Setting width is required.
   */
  float?: boolean

  /**
   * Indicate when consumer is loading to display a spinner.
   */
  isLoading?: boolean

  /**
   * Optional maximum height of result list in pixels.
   */
  maximumHeight?: number

  /**
   * Provide a "None" choice item so user can "unselect" a select choice
   * when variant is checkbox or radio.
   */
  noChoiceItem?: SearchPanelChoice

  /**
   * Function that will handle event when search input changes.
   */
  onChange: (event: ChangeEvent<HTMLInputElement>) => void

  /**
   * Function that will handle event when user presses clear button.
   */
  onClear?: (event: MouseEvent<HTMLButtonElement>) => void

  /**
   * Function that will handle event when search input is focused.
   */
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void

  /**
   * Function that will handle event when selected items change.
   */
  onSelectionChange: (selectedChoices: SearchPanelChoice[]) => void

  /**
   * State of selected choices.
   */
  preSelectedChoices?: SearchPanelChoice[]

  /**
   * Display a shadow on hover and when expanded.
   */
  shadow?: boolean

  /**
   * A smaller variant.
   */
  small?: boolean

  /**
   * Placeholder label in the search input box.
   */
  placeholder: string

  /**
   * Value of search input.
   */
  value: string

  /**
   * Variants available: checkbox, radio, link.
   */
  variant?: SearchPanelVariant

  /**
   * Width in pixels.
   */
  width?: number
}

/**
 * Expandable search panel with checkbox, radio, or link result variants.
 */
export const SearchPanel = (props: SearchPanelProps) => {
  const {
    chips = false,
    choices,
    className = "",
    clearLabel,
    float = false,
    isLoading = false,
    maximumHeight,
    noChoiceItem,
    onChange,
    onClear,
    onFocus,
    onSelectionChange,
    placeholder,
    preSelectedChoices,
    shadow = false,
    small = false,
    value,
    variant = SearchPanelVariant.link,
    width,
  } = props

  const [isExpanded, setIsExpanded] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [selectedChoices, setSelectedChoices] = useState<SearchPanelChoice[]>(
    () => preSelectedChoices ?? [],
  )
  const resultContainerId = useId()
  const searchField = useRef<HTMLInputElement>(null)
  const actualWidth = resolvePanelWidth(width)
  const isMultiSelect = variant === SearchPanelVariant.checkbox
  const isText = variant === SearchPanelVariant.link

  useEffect(() => {
    if (float && !width) {
      console.warn("Property \"float\" only works when \"width\" is also set.")
    }
  }, [float, width])

  useEffect(() => {
    if (width !== undefined && width < 254) {
      console.warn("Minimum width is 254")
    }
  }, [width])

  useEffect(() => {
    if (onClear && !clearLabel) {
      console.warn("Developer should provide a value for clearLabel.")
    }
  }, [onClear, clearLabel])

  const handlePressOutside = () => {
    searchField.current?.blur()
    setIsExpanded(false)
    setIsFocused(false)
  }

  const handleOnFocus = () => {
    setIsFocused(true)
    setIsExpanded(true)
  }

  const handleCheckChanged = (
    event: ChangeEvent<HTMLInputElement>,
    selectedChoice: SearchPanelChoice,
  ) => {
    const target = event.target
    let updateChoices = [...selectedChoices]
    let isNoneSelected = false

    if (target.checked) {
      addSelectedChoice(selectedChoice, updateChoices, isMultiSelect)
    }
    else {
      removeSelectedChoice(selectedChoice, updateChoices)
    }

    if (noChoiceItem) {
      if (selectedChoice.key === noChoiceItem.key && target.checked) {
        updateChoices = [selectedChoice]
        isNoneSelected = true
      }
      else {
        removeSelectedChoice(noChoiceItem, updateChoices)
      }
    }

    setSelectedChoices(updateChoices)
    onSelectionChange(isNoneSelected ? [] : updateChoices)
  }

  const handleRemoveSelectedChoice = (choice: SearchPanelChoice) => {
    const updateChoices = [...selectedChoices]
    removeSelectedChoice(choice, updateChoices)
    setSelectedChoices(updateChoices)
    onSelectionChange(updateChoices)
  }

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event)
  }

  const handleFocusEvent = (event: FocusEvent<HTMLInputElement>) => {
    onFocus?.(event)
  }

  const setSelected = (nextSelectedChoices: SearchPanelChoice[]) => {
    setSelectedChoices(nextSelectedChoices)
    onSelectionChange(nextSelectedChoices)
  }

  const handleLinkPress = (
    event: MouseEvent<HTMLAnchorElement>,
    choice: SearchPanelChoice,
  ) => {
    event.preventDefault()
    setSelected([choice])
    setIsExpanded(false)
  }

  useEffect(() => {
    let cancelled = false

    queueMicrotask(() => {
      if (cancelled || !isFocused) {
        return
      }

      setIsExpanded(choices.length > 0)
    })

    return () => {
      cancelled = true
    }
  }, [choices, isFocused])

  useEffect(() => {
    if (!preSelectedChoices) {
      return
    }

    let cancelled = false

    queueMicrotask(() => {
      if (!cancelled) {
        setSelectedChoices(preSelectedChoices)
      }
    })

    return () => {
      cancelled = true
    }
  }, [preSelectedChoices])

  const clickOutsideRef = useOnclickOutside(handlePressOutside)
  useKeypress("Escape", handlePressOutside)
  useKeypress("Enter", handlePressOutside)

  const showResults = isExpanded && choices.length > 0

  return (
    <div style={{ width: actualWidth ? `${actualWidth}px` : undefined }}>
      <form
        className={`
          ${className}
          ${styles.topContainer}
          ${small ? styles.small : ""}
        `}
        ref={clickOutsideRef}
        onFocus={handleOnFocus}
      >
        <div
          className={`
            ${styles.searchContainer}
            ${showResults ? styles.searchContainerExpanded : ""}
            ${showResults && shadow ? styles.searchContainerExpandedShadow : ""}
            ${small ? styles.small : ""}
            ${shadow ? styles.searchContainerShadow : ""}
          `}
        >
          <div className={styles.flexContainer}>
            <div className={styles.searchIconContainer}>
              <span className={styles.searchIcon}>
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
            <div className={styles.inputContainer}>
              <input
                ref={searchField}
                className={`${styles.inputField} ${small ? styles.small : ""}`}
                type="text"
                aria-autocomplete="both"
                aria-haspopup="listbox"
                autoCapitalize="off"
                autoComplete="off"
                autoCorrect="off"
                role="combobox"
                spellCheck={false}
                title={placeholder}
                aria-label={placeholder}
                aria-controls={resultContainerId}
                aria-expanded={showResults}
                placeholder={placeholder}
                onChange={handleSearchChange}
                onFocus={handleFocusEvent}
                value={value}
              />
            </div>
            {isLoading ? (
              <div className={`${styles.spinnerContainer} ${small ? styles.small : ""}`}>
                <span className={styles.searchIcon} aria-label="Loading">
                  <FontAwesomeIcon icon={faSpinner} spin />
                </span>
              </div>
            ) : null}
            {onClear && value ? (
              <div className={styles.clearContainer}>
                <button
                  type="button"
                  onClick={onClear}
                  title={clearLabel}
                  className={`${styles.clearButton} ${small ? styles.small : ""}`}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            ) : null}
          </div>
        </div>
        {showResults ? (
          <div
            id={resultContainerId}
            className={styles.resultContainer}
            style={{
              width: actualWidth ? `${actualWidth}px` : undefined,
              position: width && float ? "absolute" : "inherit",
            }}
          >
            <div
              className={`
                ${styles.resultSeperatorContainer}
                ${shadow ? styles.resultSeperatorContainerShadow : ""}
              `}
            >
              <div className={styles.resultSeperator} />
            </div>
            <fieldset
              className={`
                ${styles.resultListContainer}
                ${shadow ? styles.resultListContainerExpandedShadow : ""}
                ${small ? styles.small : ""}
              `}
              style={{ maxHeight: maximumHeight ? `${maximumHeight}px` : undefined }}
            >
              <ul className={styles.resultList} role="listbox">
                {noChoiceItem ? (
                  <li
                    key={noChoiceItem.key}
                    className={styles.resultListItem}
                    role="presentation"
                  >
                    <ChoiceItem
                      choice={noChoiceItem}
                      isSelected={getChoiceIndex(noChoiceItem, selectedChoices) > -1}
                      isText={isText}
                      isMultiSelect={isMultiSelect}
                      small={small}
                      onCheckChanged={handleCheckChanged}
                      onLinkPress={handleLinkPress}
                    />
                  </li>
                ) : null}
                {choices.map((choice) => (
                  <li
                    key={choice.key}
                    className={styles.resultListItem}
                    role="presentation"
                  >
                    <ChoiceItem
                      choice={choice}
                      isSelected={getChoiceIndex(choice, selectedChoices) > -1}
                      isText={isText}
                      isMultiSelect={isMultiSelect}
                      small={small}
                      onCheckChanged={handleCheckChanged}
                      onLinkPress={handleLinkPress}
                    />
                  </li>
                ))}
              </ul>
            </fieldset>
          </div>
        ) : null}
      </form>
      {chips ? (
        <div className={styles.chipContainer}>
          {selectedChoices.map((choice) => (
            <Chip
              deleteLabel={`Delete ${choice.description}`}
              onDelete={() => handleRemoveSelectedChoice(choice)}
              key={choice.key}
              value={choice.description}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}
