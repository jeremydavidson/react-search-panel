import React from "react";
import SearchPanel, { SearchPanelChoice } from "react-search-panel";
import "react-search-panel/dist/index.css";

const App = () => {
  const choice1: SearchPanelChoice = { key: "choice1", description: "Mock choice 1" };
  const mockChoices: Array<SearchPanelChoice> = [
    choice1,
    { key: "choice2", description: "Mock another choice" },
  ];

  const handleChange = () => {

  };

  return (
    <SearchPanel
      choices={mockChoices}
      placeholder="Search items"
      onChange={handleChange}
      onSelectionChange={handleChange}
      value="default value"
    />
  );
};

export default App;
