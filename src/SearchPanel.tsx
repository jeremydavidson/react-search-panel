import React, { useEffect } from "react";
import styles from "./styles.module.css";
import useOnclickOutside from "react-cool-onclickoutside";
import useKeypress from "react-use-keypress";

/**
 * Definition of a SearchPanelChoice
 */
export interface SearchPanelChoice {
  key: string;
  description: string;
}

/**
 * Definition of props for SearchPanel
 */
interface SearchPanelProps {

  /**
   * An array of choices to be displayed
   */
  choices: Array<SearchPanelChoice>,

  /**
   * By default choices are selected as radio buttons,
   * with isMultiSelect={true} they are displayed as checkboxes.
   */
  isMultiSelect?: boolean,

  /**
   * Display a "None" option so you can deselect any previously selected choice(s).
   */
  isSelectionOptional?: boolean,
  noChoiceItem?: SearchPanelChoice,
  onChange: (event: React.ChangeEvent) => void,
  onSelectionChange?: (selectedKeys: Array<string>) => void,
  shadow?: boolean,
  small?: boolean,
  placeholder: string,
  value: string,
}

/**
 * SearchPanel component
 * @param props
 */
const SearchPanel = (props: SearchPanelProps) => {
  const {
    choices,
    isMultiSelect,
    isSelectionOptional,
    noChoiceItem,
    onChange,
    onSelectionChange,
    placeholder,
    shadow,
    small,
    value,
  } = props;
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [selectedKeys, setSelectedKeys] = React.useState<Array<string>>([]);
  const fieldsetId: string = "ChoiceGroup";
  const resultContainerId: string = "ResultContainer";
  const searchField = React.useRef<HTMLInputElement>(null);

  /**
   * Handle event when user presses outside this component.
   */
  const handlePressOutside = () => {
    if (searchField.current) {
      searchField.current.blur();
    }
    setIsExpanded(false);
  };

  /**
   * Handle event when component receives focus.
   */
  const handleOnFocus = () => {
    if (choices.length) {
      setIsExpanded(true);
    }
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
  const setSelectedKey = (key: string, updateKeys: Array<string>) => {
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
    let updateKeys = [...selectedKeys];
    let isNoneSelected = false;

    // Set selected key if checked, remove it otherwise.
    if (target.checked) {
      setSelectedKey(selectedKey, updateKeys);
    }
    else {
      removeSelectedKey(selectedKey, updateKeys);
    }

    // Handle the "None" option
    if (isSelectionOptional) {
      // If the "None" option was selected, make it the only selected item.
      if (noChoiceItem && selectedKey === noChoiceItem.key) {
        if (target.checked) {
          updateKeys = [selectedKey];
          // Special case for "None" option, consumer should get an empty array
          // while the "None" option is checked on screen.
          isNoneSelected = true;
        }
      }
      // If any other item was selected, uncheck the "None" item
      else {
        if (noChoiceItem) {
          removeSelectedKey(noChoiceItem.key, updateKeys);
        }
      }
    }
    // Set state
    setSelectedKeys(updateKeys);

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
   * Handle changing search input
   * @param event
   */
  const handleSearchChange = async (event: React.ChangeEvent) => {
    await onChange(event);
    if (choices.length) {
      setIsExpanded(true);
    }
  };

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
        <input
          id={choiceId}
          name={fieldsetId}
          tabIndex={0}
          type={inputType}
          onChange={(event) => handleCheckChanged(event, choice.key)}
          value={choice.key}
          checked={selectedKeys.indexOf(choice.key) > -1}
        />
        <label htmlFor={choiceId} className={styles.resultItemLabel}>
          {choice.description}
        </label>
      </div>
    );
  };

  /**
   * When choices change, clear out previously selected keys
   */
  useEffect(() => {
    setSelectedKeys([]);
  }, [choices]);

  const clickOutsideRef = useOnclickOutside(handlePressOutside);
  useKeypress("Escape", handlePressOutside);

  return (
    <form
      className={`
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
            ${isExpanded ? styles.searchContainerExpanded : ""}
            ${isExpanded && shadow ? styles.searchContainerExpandedShadow : ""}
            ${small ? styles.small : ""}
            ${shadow ? styles.searchContainerShadow : ""}
          `}
      >
        <div className={styles.flexContainer}>
          <div className={styles.searchIconContainer}>
            <span className={styles.searchIcon}>
              <svg
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
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
      {isExpanded && (
        <div
          id={resultContainerId}
          className={styles.resultContainer}
        >
          <fieldset
            id={fieldsetId}
            className={`
            ${styles.resultListContainer}
            ${shadow ? styles.resultListContainerExpandedShadow : ""}
            ${small ? styles.small : ""}
          `}
          >
            <div className={styles.resultSeperator} />
            <ul className={styles.resultList} role="listbox">
              {isSelectionOptional && noChoiceItem && (
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
  );
};

export default SearchPanel;
