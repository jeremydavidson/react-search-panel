import React, { useState } from "react";
import { SearchPanel } from "./SearchPanel";

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

export const WithChoices = () => {
  const mockChoices: SearchPanelChoice[] = [
    { key: "choice1", description: "Mock choice 1" },
    { key: "choice2", description: "Mock another choice" },
  ];

  const [input, setInput] = useState("");

  return (
    <SearchPanel
      choices={mockChoices}
      placeholder="Mock search"
      onChange={event => setInput(event.target.value)}
      value={input}
    />
  );
};
