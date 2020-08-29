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
  value: string,
}

export const SearchPanel = ({ choices, onChange, placeholder, value }: Props) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <div
      className={`topContainer ${isFocused ? "topContainerExpanded" : ""}`}
      onBlur={() => setIsFocused(false)}
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
        <div className="resultListContainer">
          <div className="resultSeperator" />
          <ul className="resultList" role="listbox">
            {choices.map(choice => (
              <li key={choice.key} className="resultListItem" role="presentation">
                <div className="resultItem">
                  <span>{choice.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
