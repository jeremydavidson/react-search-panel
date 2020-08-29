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

export const WithChoices = () => {
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
      onChange={handleChange}
      onSelectionChange={handleSelectionChange}
      placeholder="Mock search"
      value={input}
    />
  );
};
