import * as React from "react";
import "./styles.module.css";

export interface SearchPanelChoice {
  key: string;
  description: string;
}

interface Props {
  choices: Array<SearchPanelChoice>,
  placeholder: string,
  onChange: () => void,
  onSelectionChange: (selectedKeys: Array<string>) => void,
  value: string,
}

const SearchPanel = (props: Props) => {
  const {
    choices,
    onChange,
    onSelectionChange,
    placeholder,
    value,
  } = props;
  const [isFocused, setIsFocused] = React.useState(false);
  const [selectedKeys, setSelectedKeys] = React.useState<Array<string>>([]);
  const fieldsetId: string = "choiceGroup";

  const handleCheckChanged = (event: React.ChangeEvent, selectedKey: string) => {
    const target = event.target as HTMLInputElement;
    const updateKeys = [...selectedKeys];
    if (target.checked) {
      updateKeys.push(selectedKey);
    } else {
      const index: number = updateKeys.indexOf(selectedKey);
      if (index > -1) {
        updateKeys.splice(index, 1);
      }
    }
    setSelectedKeys(updateKeys);
    onSelectionChange(updateKeys);
  };

  interface ChoiceItemProps {
    choice: SearchPanelChoice,
  }
  const ChoiceItem = ({ choice }: ChoiceItemProps) => {
    const choiceId = `choice_${choice.key}_${Math.random()}`;
    const inputType: string = "checkbox";
    return (
      <div className="resultItem">
        <input
          id={choiceId}
          name={fieldsetId}
          type={inputType}
          onChange={event => handleCheckChanged(event, choice.key)}
          value={choice.key}
          checked={selectedKeys.indexOf(choice.key) > -1}
        />
        <label htmlFor={choiceId} className="resultItemLabel">{choice.description}</label>
      </div>
    );
  };

  return (
    <form
      className={`topContainer ${isFocused ? "topContainerExpanded" : ""}`}
      onClick={() => setIsFocused(true)}
    >
      <div className="searchContainer">
        <div className="flexContainer">
          <div className="searchIconContainer">
            <span className="searchIcon">
              <svg
                focusable="false" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                />
              </svg>
            </span>
          </div>
          <div className="inputContainer">
            <div className="inputFieldContainer" />
            <input
              className="inputField"
              type="text"
              aria-autocomplete="both"
              aria-haspopup="false"
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
              role="combobox"
              spellCheck="false"
              title="Search"
              value={value}
              placeholder={placeholder}
              aria-label="Search"
              onChange={onChange}
            />
          </div>
        </div>
      </div>
      <div className={`resultContainer ${isFocused ? "" : "resultContainerCollapsed"}`}>
        <fieldset id={fieldsetId} className="resultListContainer">
          <div className="resultSeperator" />
          <ul className="resultList" role="listbox">
            {choices.map(choice => (
              <li key={choice.key} className="resultListItem" role="presentation">
                <ChoiceItem choice={choice} />
              </li>
            ))}
          </ul>
        </fieldset>
      </div>
    </form>
  );
};

export default SearchPanel;
