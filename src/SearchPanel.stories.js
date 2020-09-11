import React, { useState } from "react";
import { SearchPanel, SearchPanelVariant } from "./SearchPanel";

export default {
  title: "SearchPanel",
};

// const styles = {
//   constrained: {
//     width: "300px",
//   }
// };

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

export const Small = () => {
  const [input, setInput] = useState("");

  return (

    <SearchPanel
      choices={choices}
      onChange={event => setInput(event.target.value)}
      onSelectionChange={() => {}}
      placeholder="Search"
      small
      value={input}
      width={300}
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

export const PreselectedChoices = () => {
  const [input, setInput] = useState("");
  const [selectedChoices, setSelectedChoices] = useState(choices);
  return (

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

  );
};

export const PreselectedSmall = () => {
  const [input, setInput] = useState("");
  const [selectedChoices, setSelectedChoices] = useState(choices);
  return (

    <SearchPanel
      chips
      height={120}
      choices={choices}
      variant={SearchPanelVariant.checkbox}
      onChange={event => setInput(event.target.value)}
      onClear={() => setInput("")}
      onSelectionChange={setSelectedChoices}
      placeholder="Search"
      preSelectedChoices={selectedChoices}
      small
      value={input}
      width={400}
    />

  );
};

export const SingleSelectNone = () => {
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

export const DefaultWithWidth = () => {
  const [input, setInput] = useState("");

  return (

    <SearchPanel
      choices={choices}
      variant={SearchPanelVariant.checkbox}
      onChange={event => setInput(event.target.value)}
      onSelectionChange={() => {}}
      noChoiceItem={noChoiceItem}
      placeholder="Search"
      value={input}
      width={300}
    />

  );
};

export const SmallWithWidth = () => {
  const [input, setInput] = useState("");

  return (

    <SearchPanel
      choices={choices}
      variant={SearchPanelVariant.checkbox}
      onChange={event => setInput(event.target.value)}
      onSelectionChange={() => {}}
      noChoiceItem={noChoiceItem}
      placeholder="Search"
      small
      value={input}
      width={300}
    />

  );
};

export const ShadowWithWidth = () => {
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
      value={input}
      width={300}
    />

  );
};

export const LinkVariant = () => {
  const [input, setInput] = useState("");

  return (

    <SearchPanel
      choices={choices}
      variant={SearchPanelVariant.link}
      onChange={event => setInput(event.target.value)}
      onSelectionChange={() => {}}
      placeholder="Search"
      shadow
      value={input}
    />

  );
};

export const LinkVariantSmall = () => {
  const [input, setInput] = useState("");

  return (

    <SearchPanel
      choices={choices}
      variant={SearchPanelVariant.link}
      onChange={event => setInput(event.target.value)}
      onSelectionChange={() => {}}
      placeholder="Search"
      small
      value={input}
    />

  );
};

export const FloatingResults = () => {
  const [input, setInput] = useState("");

  return (

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

  );
};

export const LoadingIndicator = () => {
  const [input, setInput] = useState("");

  return (

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

  );
};

export const ClearButton = () => {
  const [input, setInput] = useState("Default input");

  return (

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

  );
};

export const ClearButtonSmall = () => {
  const [input, setInput] = useState("Default input");

  return (

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

  );
};
