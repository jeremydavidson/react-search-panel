import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
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
   * Result list will float above content. Setting width is required.
   */
  float?: boolean,

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
   * Function that will handle event when selected items change.
   */
  onSelectionChange?: (selectedChoices: Array<string>) => void,

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
    float,
    maximumHeight,
    noChoiceItem,
    onChange,
    onSelectionChange,
    placeholder,
    shadow,
    small,
    value,
    variant,
    width
  } = props;
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);
  const [selectedChoices, setSelectedChoices] = React.useState<Array<string>>([]);
  const fieldsetId: string = "ChoiceGroup";
  const resultContainerId: string = "ResultContainer";
  const searchField = React.useRef<HTMLInputElement>(null);

  if (float && !width) {
    console.log("Property 'float' only works when 'width' is also set.");
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
   * @param key
   * @param updateKeys
   */
  const removeSelectedKey = (key: string, updateKeys: Array<string>) => {
    const index: number = updateKeys.indexOf(key);
    if (index > -1) {
      updateKeys.splice(index, 1);
    }
  };

  /**
   * Add a selected key, if not multi-select, remove any previous selected key.
   * @param key
   * @param updateKeys
   */
  const addSelectedKey = (key: string, updateKeys: Array<string>) => {
    if (isMultiSelect) {
      updateKeys.push(key);
    }
    else {
      updateKeys.splice(0, updateKeys.length);
      updateKeys.push(key);
    }
  };

  /**
   * Handle when an item is selected.
   * Handle cases where item is single or multi select.
   * @param event
   * @param selectedKey
   */
  const handleCheckChanged = (event: React.ChangeEvent, selectedKey: string) => {
    const target = event.target as HTMLInputElement;
    let updateKeys = [...selectedChoices];
    let isNoneSelected = false;

    // Set selected key if checked, remove it otherwise.
    if (target.checked) {
      addSelectedKey(selectedKey, updateKeys);
    }
    else {
      removeSelectedKey(selectedKey, updateKeys);
    }

    // If the "None" option was selected, make it the only selected item.
    if (noChoiceItem) {
      if (selectedKey === noChoiceItem.key && target.checked) {
        updateKeys = [selectedKey];
        // Special case for "None" option, consumer should get an empty array
        // while the "None" option is checked on screen.
        isNoneSelected = true;
      }
      // If any other item was selected, uncheck the "None" item
      else {
        removeSelectedKey(noChoiceItem.key, updateKeys);
      }
    }

    // Set state
    setSelectedChoices(updateKeys);

    // Notify the consumer of the currently selected keys
    if (onSelectionChange) {
      if (isNoneSelected) {
        onSelectionChange([]);
      }
      else {
        onSelectionChange(updateKeys);
      }
    }
  };

  /**
   * Handle removing a selected key
   * @param key
   */
  const handleRemoveSelectedChoice = (key: string) => {
    const updateKeys = [...selectedChoices];
    removeSelectedKey(key, updateKeys);
    setSelectedChoices(updateKeys);
    if (onSelectionChange) {
      onSelectionChange(updateKeys);
    }
  };

  /**
   * Handle changing search input
   * @param event
   */
  const handleSearchChange = async (event: React.ChangeEvent) => {
    await onChange(event);
  };

  /**
   * Handle link variant click
   * @param event
   * @param choice
   */
  const handleLinkPress = (event: React.MouseEvent<HTMLAnchorElement>, choice: SearchPanelChoice) => {
    event.preventDefault();
    const selectedKeys = [choice.key];
    setSelected(selectedKeys);
  };

  /**
   * Set selected keys and notify consumer of the change.
   */
  const setSelected = (selectedKeys: Array<string>) => {
    setSelectedChoices(selectedKeys);
    if (onSelectionChange) {
      onSelectionChange(selectedKeys);
    }
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
   * Reset selected keys when variant changes,
   * because radio and link variant support single selection,
   * while checkbox variant supports multiple.
   */
  useEffect(() => {
    setSelected([]);
  }, [variant]);

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
    const choiceId = `choice_${choice.key}_${Math.random()}`;
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
              id={choiceId}
              key={choiceId}
              name={fieldsetId}
              type={inputType}
              onChange={(event) => handleCheckChanged(event, choice.key)}
              value={choice.key}
              checked={selectedChoices.indexOf(choice.key) > -1}
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
        style={{ width: width ? `${width - 2}px` : "" }}
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
              value={value}
            />
          </div>
        </div>
      </div>
      {isExpanded && (choices.length > 0) && (
        <div
          id={resultContainerId}
          className={styles.resultContainer}
          style={{ width: `${width}px` || "", position: (width && float) ? "absolute" : "inherit" }}
        >
          <div className={`
            ${styles.resultSeperatorContainer}
            ${shadow ? styles.resultSeperatorContainerShadow : ""}
          `}
          >
            <div className={styles.resultSeperator} />
          </div>
          <fieldset
            id={fieldsetId}
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

      {chips && (
        <div className={styles.chipContainer}>
          {selectedChoices.map(key => (
            <Chip
              deleteLabel={`Delete ${key}`}
              onDelete={() => handleRemoveSelectedChoice(key)}
              key={key}
              value={choices[choices.indexOf(choices.filter(item => item.key === key)[0])].description}
            />
          ))}
        </div>
      )}

    </form>
  );
};
