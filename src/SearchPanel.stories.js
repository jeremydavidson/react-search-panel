import React, { useState } from "react";
import SearchPanel from "./SearchPanel";

export default {
  title: "SearchPanel",
};

export const Default = () => {
  const [input, setInput] = useState("");

  return (
    <SearchPanel
      choices={[]}
      placeholder="Mock search"
      onChange={event => setInput(event.target.value)}
      value={input}
    />
  );
};

const mockChoices = [
  { key: "choice1", description: "Mock choice" },
  { key: "choice2", description: "Mock another choice" },
];

const noChoiceItem = { key: "none", description: "None" };

export const WithSingleSelect = () => {
  const [input, setInput] = useState("");
  const handleChange = (event) => {
    console.log("handleChange: " + event.target.id + "=" + event.target.value);
    setInput(event.target.value);
  };
  const handleSelectionChange = (selectedKeys) => {
    console.log("handleSelectionChange: " + selectedKeys);
  };
  return (
    <SearchPanel
      choices={mockChoices}
      isSelectionOptional
      isMultiSelect={false}
      noChoiceItem={noChoiceItem}
      onChange={handleChange}
      onSelectionChange={handleSelectionChange}
      placeholder="Mock search"
      value={input}
    />
  );
};

export const WithMultiSelect = () => {
  const [input, setInput] = useState("");
  const handleSelectionChange = (selectedKeys) => {
    console.log("handleSelectionChange: " + selectedKeys);
  };
  return (
    <SearchPanel
      choices={mockChoices}
      isMultiSelect
      isSelectionOptional
      onChange={event => setInput(event.target.value)}
      onSelectionChange={handleSelectionChange}
      noChoiceItem={noChoiceItem}
      placeholder="Mock search"
      value={input}
    />
  );
};
