import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";
import useOnclickOutside from "react-cool-onclickoutside";
import useKeypress from "react-use-keypress";
import Chip from "./Chip";

/**
 * Definition of a SearchPanelChoice
 */
export interface SearchPanelChoice {
  /**
   * Key for a choice can be any unique string.
   * For link variant, recommend using a url.
   */
  key: string;

  /**
   * The description that will be displayed in search results.
   */
  description: string;
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
interface SearchPanelProps {

  /**
   * Display Chips to represent selected choices.
   */
  chips?: boolean,

  /**
   * An array of choices to be displayed.
   */
  choices: Array<SearchPanelChoice>,

  /**
   * Optional class name to be applied to the top level of the component.
   */
  className?: string,

  /**
   * A label for clear button, should be provided if onClear is provided.
   */
  clearLabel?: string,

  /**
   * Result list will float above content. Setting width is required.
   */
  float?: boolean,

  /**
   * Indicate when consumer is loading to display a spinner.
   */
  isLoading?: boolean,

  /**
   * Optional maximum height of result list in pixels: <SearchPanel maximumHeight={250} />
   */
  maximumHeight?: number,

  /**
   * Provide a "None" choice item so user can "unselect" a select choice
   * when variant={SearchPanelVariant.checkbox} or variant={SearchPanelVariant.radio}
   */
  noChoiceItem?: SearchPanelChoice,

  /**
   * Function that will handle event when search input changes.
   */
  onChange: (event: React.ChangeEvent) => void,

  /**
   * Function that will handle event when user presses clear button.
   */
  onClear?: (event: React.MouseEvent) => void,

  /**
   * Function that will handle event when search input is focused.
   */
  onFocus?: (event: React.FocusEvent) => void,

  /**
   * Function that will handle event when selected items change.
   */
  onSelectionChange: (selectedChoices: Array<SearchPanelChoice>) => void,

  /**
   * State of selected choices.
   */
  preSelectedChoices?: Array<SearchPanelChoice>,

  /**
   * Display a shadow on hover and when expanded.
   */
  shadow?: boolean,

  /**
   * A smaller variant.
   */
  small?: boolean,

  /**
   * Placeholder label in the search input box.
   */
  placeholder: string,

  /**
   * Value of search input.
   */
  value: string,

  /**
   * Variants available: checkbox, radio, link (can be used as links by consumer)
   */
  variant?: SearchPanelVariant,

  /**
   * Width in pixels.
   */
  width?: number,
}

/**
 * SearchPanel component
 * @param props
 */
export const SearchPanel = (props: SearchPanelProps) => {
  const {
    chips,
    choices,
    className,
    clearLabel,
    float,
    isLoading,
    maximumHeight,
    noChoiceItem,
    onChange,
    onClear,
    onFocus,
    onSelectionChange,
    placeholder,
    preSelectedChoices,
    shadow,
    small,
    value,
    variant,
    width
  } = props;
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);
  const [selectedChoices, setSelectedChoices] = React.useState<Array<SearchPanelChoice>>([]);
  const resultContainerId: string = "ResultContainer";
  const searchField = React.useRef<HTMLInputElement>(null);

  if (float && !width) {
    console.log("Property 'float' only works when 'width' is also set.");
  }
  let actualWidth;
  if (width) {
    if (width < 254) {
      console.log("Minimum width is 254");
      actualWidth = 254;
    }
    else {
      actualWidth = width;
    }
  }
  if (onClear && !clearLabel) {
    console.log("Developer should provide a value for clearLabel.");
  }
  let isMultiSelect = false;
  let isText = true;
  if (SearchPanelVariant.checkbox === variant) {
    isMultiSelect = true;
  }
  if (SearchPanelVariant.link !== variant) {
    isText = false;
  }

  /**
   * Handle event when user presses outside this component.
   */
  const handlePressOutside = () => {
    if (searchField.current) {
      searchField.current.blur();
    }
    setIsExpanded(false);
    setIsFocused(false);
  };

  /**
   * Handle event when component receives focus.
   */
  const handleOnFocus = () => {
    setIsFocused(true);
    setIsExpanded(true);
  };

  /**
   * Handle component blur event to find if the newly focused element
   * is within the component or not. If not, collapse the search bar.
   * @param event
   */
  // const handleOnBlur = (event: React.FormEvent) => {
  const handleOnBlur = () => {
    // const currentTarget = event.currentTarget;

    // // Check the newly focused element in the next tick of the event loop
    // setTimeout(() => {
    //   // Check if the new activeElement is a child of the original container
    //   if (!currentTarget.contains(document.activeElement)) {
    //     // You can invoke a callback or add custom logic here
    //     setIsExpanded(false);
    //   }
    // }, 0);
  };

  /**
   * Remove a selected key
   * @param choice
   * @param updateChoices
   */
  const removeSelectedChoice = (choice: SearchPanelChoice, updateChoices: Array<SearchPanelChoice>) => {
    const index: number = getIndex(choice, updateChoices);
    if (index > -1) {
      updateChoices.splice(index, 1);
    }
  };

  const getIndex = (choice: SearchPanelChoice, choices: Array<SearchPanelChoice>) => {
    let index:number = -1;
    const mappedKeys = choices.map(eachChoice => {
      return eachChoice.key;
    });
    index = mappedKeys.indexOf(choice.key);
    return index;
  };

  /**
   * Add a selected key, if not multi-select, remove any previous selected key.
   * @param key
   * @param updateChoices
   */
  const addSelectedChoice = (key: SearchPanelChoice, updateChoices: Array<SearchPanelChoice>) => {
    if (isMultiSelect) {
      updateChoices.push(key);
    }
    else {
      updateChoices.splice(0, updateChoices.length);
      updateChoices.push(key);
    }
  };

  /**
   * Handle when an item is selected.
   * Handle cases where item is single or multi select.
   * @param event
   * @param selectedChoice
   */
  const handleCheckChanged = (event: React.ChangeEvent, selectedChoice: SearchPanelChoice) => {
    const target = event.target as HTMLInputElement;
    let updateChoices = [...selectedChoices];
    let isNoneSelected = false;

    // Set selected key if checked, remove it otherwise.
    if (target.checked) {
      addSelectedChoice(selectedChoice, updateChoices);
    }
    else {
      removeSelectedChoice(selectedChoice, updateChoices);
    }

    // If the "None" option was selected, make it the only selected item.
    if (noChoiceItem) {
      if (selectedChoice.key === noChoiceItem.key && target.checked) {
        updateChoices = [selectedChoice];
        // Special case for "None" option, consumer should get an empty array
        // while the "None" option is checked on screen.
        isNoneSelected = true;
      }
      // If any other item was selected, uncheck the "None" item
      else {
        removeSelectedChoice(noChoiceItem, updateChoices);
      }
    }

    // Set state
    setSelectedChoices(updateChoices);

    // Notify the consumer of the currently selected choices
    if (isNoneSelected) {
      onSelectionChange([]);
    }
    else {
      onSelectionChange(updateChoices);
    }
  };

  /**
   * Handle removing a selected key
   * @param choice
   */
  const handleRemoveSelectedChoice = (choice: SearchPanelChoice) => {
    const updateChoices = [...selectedChoices];
    removeSelectedChoice(choice, updateChoices);
    setSelectedChoices(updateChoices);
    onSelectionChange(updateChoices);
  };

  /**
   * Handle changing search input
   * @param event
   */
  const handleSearchChange = async (event: React.ChangeEvent) => {
    await onChange(event);
  };

  /**
   * Handle focus event
   * @param event
   */
  const handleFocusEvent = async (event: React.FocusEvent) => {
    onFocus && await onFocus(event);
  };

  /**
   * Handle link variant click
   * @param event
   * @param choice
   */
  const handleLinkPress = (event: React.MouseEvent<HTMLAnchorElement>, choice: SearchPanelChoice) => {
    event.preventDefault();
    const selectedChoices = [choice];
    setSelected(selectedChoices);
    setIsExpanded(false);
  };

  /**
   * Set selected choices and notify consumer of the change.
   */
  const setSelected = (selectedChoices: Array<SearchPanelChoice>) => {
    setSelectedChoices(selectedChoices);
    onSelectionChange(selectedChoices);
  };

  /**
   * Reset expanded state when choices change
   */
  useEffect(() => {
    if (isFocused) {
      if (choices.length) {
        setIsExpanded(true);
      }
      else {
        setIsExpanded(false);
      }
    }
  }, [choices]);

  /**
   * Update selected choices
   * @param {SearchPanelProps} props
   * @returns
   */
  useEffect(() => {
    if (preSelectedChoices) {
      setSelectedChoices(preSelectedChoices);
    }
  }, [preSelectedChoices]);

  /**
   * Definition of ChoiceItem properties
   */
  interface ChoiceItemProps {
    choice: SearchPanelChoice,
  }

  /**
   * Definition of ChoiceItem, radio or checkbox input.
   * @param param0
   */
  const ChoiceItem = ({ choice }: ChoiceItemProps) => {
    let inputType: string = "radio";
    if (isMultiSelect) {
      inputType = "checkbox";
    }
    return (
      <div className={`${styles.resultItem} ${small ? styles.small : ""}`}>
        {isText && (
          <a
            href=""
            className={styles.linkChoice}
            onClick={(event) => handleLinkPress(event, choice)}
          >
            {choice.description}
          </a>
        )}
        {!isText && (
          <label className={styles.resultItemLabel}>
            <input
              type={inputType}
              onChange={(event) => handleCheckChanged(event, choice)}
              value={choice.key}
              checked={getIndex(choice, selectedChoices) > -1}
              tabIndex={0}
              className={styles.resultItemControl}
            />
            {choice.description}
          </label>
        )}
      </div>
    );
  };

  const clickOutsideRef = useOnclickOutside(handlePressOutside);
  useKeypress("Escape", handlePressOutside);
  useKeypress("Enter", handlePressOutside);

  return (
    <div
      // Percentage width can work here,
      // if corresponding width on resultList should be 100%
      // Also, need to calculate minimum percentage
      style={{ width: actualWidth ? `${actualWidth}px` : "" }}
    >
      <form
        className={`
          ${className}
          ${styles.topContainer}
          ${small ? styles.small : ""}
        `}
        ref={clickOutsideRef}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      >
        <div
          className={`
            ${styles.searchContainer}
            ${isExpanded && (choices.length > 0) ? styles.searchContainerExpanded : ""}
            ${isExpanded && shadow ? styles.searchContainerExpandedShadow : ""}
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
              <div className={styles.inputFieldContainer} />
              <input
                ref={searchField}
                className={`${styles.inputField} ${small ? styles.small : ""}`}
                type="text"
                aria-autocomplete="both"
                aria-haspopup="false"
                autoCapitalize="off"
                autoComplete="off"
                autoCorrect="off"
                role="combobox"
                spellCheck="false"
                title={placeholder}
                aria-label={placeholder}
                aria-controls={resultContainerId}
                aria-expanded={isExpanded}
                placeholder={placeholder}
                onChange={handleSearchChange}
                onFocus={handleFocusEvent}
                value={value}
              />
            </div>
            {isLoading && (
              <div className={`${styles.spinnerContainer} ${small ? styles.small : ""}`}>
                <span className={styles.searchIcon}>
                  <FontAwesomeIcon icon={faSpinner} spin />
                </span>
              </div>
            )}
            {onClear && value && (
              <div className={styles.clearContainer}>
                <button
                  onClick={onClear}
                  title={clearLabel}
                  className={`${styles.clearButton} ${small ? styles.small : ""}`}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            )}
          </div>
        </div>
        {isExpanded && (choices.length > 0) && (
          <div
            id={resultContainerId}
            className={styles.resultContainer}
            style={{ width: `${actualWidth}px` || "", position: (width && float) ? "absolute" : "inherit" }}
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
              style={{ maxHeight: maximumHeight ? `${maximumHeight}px` : "" }}
            >
              <ul className={styles.resultList} role="listbox">
                {noChoiceItem && (
                  <li
                    key={noChoiceItem.key}
                    className={styles.resultListItem}
                    role="presentation"
                  >
                    <ChoiceItem choice={noChoiceItem} />
                  </li>
                )}
                {choices.map((choice) => (
                  <li
                    key={choice.key}
                    className={styles.resultListItem}
                    role="presentation"
                  >
                    <ChoiceItem choice={choice} />
                  </li>
                ))}
              </ul>
            </fieldset>
          </div>
        )}
      </form>
      {chips && (
        <div className={styles.chipContainer}>
          {selectedChoices.map(choice => (
            <Chip
              deleteLabel={`Delete ${choice.description}`}
              onDelete={() => handleRemoveSelectedChoice(choice)}
              key={choice.key}
              value={choice.description}
            />
          ))}
        </div>
      )}
    </div>
  );
};
