import React, { useState } from "react";
import SearchPanel, { SearchPanelVariant } from "./SearchPanel";

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
];

const noChoiceItem = { key: "none", description: "None" };

export const Default = () => {
  const [input, setInput] = React.useState("");
  const [, setSelectedKeys] = React.useState([]);
  const handleChange = (event) => {
    console.log("handleChange: " + event.target.id + "=" + event.target.value);
    setInput(event.target.value);
  };
  const handleSelectionChange = (selectedKeys) => {
    console.log("handleSelectionChange: " + selectedKeys);
    setSelectedKeys(selectedKeys);
  };
  return (
    <SearchPanel
      choices={choices}
      onChange={handleChange}
      onSelectionChange={handleSelectionChange}
      placeholder="Search"
      value={input}
    />
  );
};

export const Shadow = () => {
  const [input, setInput] = React.useState("");
  return (
    <SearchPanel
      choices={choices}
      onChange={event => setInput(event.target.value)}
      placeholder="Search"
      shadow
      value={input}
    />
  );
};

export const SingleSelect = () => {
  const [input, setInput] = React.useState("");
  return (
    <SearchPanel
      choices={choices}
      variant={SearchPanelVariant.radio}
      onChange={event => setInput(event.target.value)}
      placeholder="Search"
      shadow
      value={input}
    />
  );
};

export const SingleNoneOption = () => {
  const [input, setInput] = React.useState("");
  return (
    <SearchPanel
      choices={choices}
      variant={SearchPanelVariant.radio}
      noChoiceItem={noChoiceItem}
      onChange={event => setInput(event.target.value)}
      placeholder="Search"
      shadow
      value={input}
    />
  );
};

export const MultiSelect = () => {
  const [input, setInput] = React.useState("");
  return (
    <SearchPanel
      choices={choices}
      variant={SearchPanelVariant.checkbox}
      onChange={event => setInput(event.target.value)}
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
        placeholder="Search"
        small
        value={input}
      />
    </div>
  );
};
