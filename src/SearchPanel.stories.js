import React, { useState } from "react";
import { SearchPanel, SearchPanelVariant } from "./SearchPanel";

export default {
  title: "SearchPanel",
};

const styles = {
  constrained: {
    width: "300px",
  }
};

const choices = [
  { key: "choice1", description: "A choice" },
  { key: "choice2", description: "Another choice" },
  { key: "choice3", description: "This choice" },
  { key: "choice4", description: "That choice" },
];

const noChoiceItem = { key: "none", description: "None" };

export const Default = () => {
  const [input, setInput] = useState("");
  const [selectedChoices, setSelectedChoices] = useState([]);
  const handleChange = (event) => {
    console.log("handleChange: " + event.target.id + "=" + event.target.value);
    setInput(event.target.value);
  };
  const handleSelectionChange = (selectedKeys) => {
    console.log("handleSelectionChange: " + selectedKeys);
    setSelectedChoices(selectedKeys);
  };
  return (
    <SearchPanel
      choices={choices}
      onChange={handleChange}
      onSelectionChange={handleSelectionChange}
      placeholder="Search"
      selectedChoices={selectedChoices}
      value={input}
    />
  );
};

export const Shadow = () => {
  const [input, setInput] = useState("");

  return (
    <SearchPanel
      choices={choices}
      onChange={event => setInput(event.target.value)}
      onSelectionChange={() => {}}
      placeholder="Search"
      shadow
      value={input}
    />
  );
};

export const SingleSelect = () => {
  const [input, setInput] = useState("");

  return (
    <SearchPanel
      choices={choices}
      variant={SearchPanelVariant.radio}
      onChange={event => setInput(event.target.value)}
      onSelectionChange={() => {}}
      placeholder="Search"
      shadow
      value={input}
    />
  );
};

export const SingleNoneOption = () => {
  const [input, setInput] = useState("");

  return (
    <SearchPanel
      choices={choices}
      variant={SearchPanelVariant.radio}
      noChoiceItem={noChoiceItem}
      onChange={event => setInput(event.target.value)}
      onSelectionChange={() => {}}
      placeholder="Search"
      shadow
      value={input}
    />
  );
};

export const MultiSelect = () => {
  const [input, setInput] = useState("");

  return (
    <SearchPanel
      chips
      choices={choices}
      variant={SearchPanelVariant.checkbox}
      onChange={event => setInput(event.target.value)}
      onSelectionChange={() => {}}
      placeholder="Search"
      shadow
      value={input}
    />
  );
};

export const MultiSelectWithNone = () => {
  const [input, setInput] = useState("");

  return (
    <SearchPanel
      choices={choices}
      variant={SearchPanelVariant.checkbox}
      onChange={event => setInput(event.target.value)}
      noChoiceItem={noChoiceItem}
      onSelectionChange={() => {}}
      placeholder="Search"
      shadow
      value={input}
    />
  );
};

export const SmallWithMultiSelect = () => {
  const [input, setInput] = useState("");

  return (
    <SearchPanel
      choices={choices}
      variant={SearchPanelVariant.checkbox}
      onChange={event => setInput(event.target.value)}
      onSelectionChange={() => {}}
      noChoiceItem={noChoiceItem}
      placeholder="Search"
      shadow
      small
      value={input}
    />
  );
};

export const SmallConstrained = () => {
  const [input, setInput] = useState("");

  return (
    <div style={styles.constrained}>
      <SearchPanel
        choices={choices}
        variant={SearchPanelVariant.checkbox}
        onChange={event => setInput(event.target.value)}
        onSelectionChange={() => {}}
        noChoiceItem={noChoiceItem}
        placeholder="Search"
        small
        value={input}
      />
    </div>
  );
};

export const LinkVariant = () => {
  const [input, setInput] = useState("");

  return (
    <div style={styles.constrained}>
      <SearchPanel
        choices={choices}
        variant={SearchPanelVariant.link}
        onChange={event => setInput(event.target.value)}
        onSelectionChange={() => {}}
        placeholder="Search"
        shadow
        value={input}
      />
    </div>
  );
};

export const LinkVariantSmall = () => {
  const [input, setInput] = useState("");

  return (
    <div style={styles.constrained}>
      <SearchPanel
        choices={choices}
        variant={SearchPanelVariant.link}
        onChange={event => setInput(event.target.value)}
        onSelectionChange={() => {}}
        placeholder="Search"
        small
        value={input}
      />
    </div>
  );
};

export const FloatingResults = () => {
  const [input, setInput] = useState("");

  return (
    <div style={styles.constrained}>
      <SearchPanel
        choices={choices}
        float
        maximumHeight={100}
        variant={SearchPanelVariant.link}
        onChange={event => setInput(event.target.value)}
        onSelectionChange={() => {}}
        placeholder="Search"
        shadow
        value={input}
        width={350}
      />
    </div>
  );
};

export const LoadingIndicator = () => {
  const [input, setInput] = useState("");

  return (
    <div style={styles.constrained}>
      <SearchPanel
        choices={choices}
        isLoading
        variant={SearchPanelVariant.link}
        onChange={event => setInput(event.target.value)}
        onSelectionChange={() => {}}
        placeholder="Search"
        shadow
        value={input}
      />
    </div>
  );
};

export const ClearButton = () => {
  const [input, setInput] = useState("Default input");

  return (
    <div style={styles.constrained}>
      <SearchPanel
        choices={choices}
        isLoading
        variant={SearchPanelVariant.link}
        onChange={event => setInput(event.target.value)}
        onClear={() => setInput("")}
        onSelectionChange={() => {}}
        placeholder="Search"
        shadow
        value={input}
      />
    </div>
  );
};

export const ClearButtonSmall = () => {
  const [input, setInput] = useState("Default input");

  return (
    <div style={styles.constrained}>
      <SearchPanel
        choices={choices}
        isLoading
        variant={SearchPanelVariant.link}
        onChange={event => setInput(event.target.value)}
        onClear={() => setInput("")}
        onSelectionChange={() => {}}
        placeholder="Search"
        shadow
        small
        value={input}
      />
    </div>
  );
};

export const PreselectedChoices = () => {
  const [input, setInput] = useState("");
  const [selectedChoices, setSelectedChoices] = useState(choices);
  return (
    <div style={styles.constrained}>
      <SearchPanel
        chips
        choices={choices}
        variant={SearchPanelVariant.checkbox}
        onChange={event => setInput(event.target.value)}
        onClear={() => setInput("")}
        onSelectionChange={setSelectedChoices}
        placeholder="Search"
        preSelectedChoices={selectedChoices}
        shadow
        value={input}
      />
    </div>
  );
};

export const PreselectedSmall = () => {
  const [input, setInput] = useState("");
  const [selectedChoices, setSelectedChoices] = useState(choices);
  return (
    <div style={styles.constrained}>
      <SearchPanel
        chips
        float
        height={120}
        choices={choices}
        variant={SearchPanelVariant.checkbox}
        onChange={event => setInput(event.target.value)}
        onClear={() => setInput("")}
        onSelectionChange={setSelectedChoices}
        placeholder="Search"
        preSelectedChoices={selectedChoices}
        shadow
        small
        value={input}
        width={226}
      />
    </div>
  );
};
