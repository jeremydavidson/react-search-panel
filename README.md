# React Search Panel

A react search panel that expands, autocompletes, and support single or multi select.

## Demo

There is a [demonstration of react-search-panel](https://jeremydavidson.github.io/react-search-panel/demo) as coded in the `example` folder.

Many other variants of this component are demonstrated in this [Storybook demonstration](https://jeremydavidson.github.io/react-search-panel/storybook).

## Documentation

Here is [documentation of the component API](https://jeremydavidson.github.io/react-search-panel/doc).

## Getting started

### For development

1. `npm install --save-dev react-search-panel`

### Run example locally

1. `git clone https://github.com/jeremydavidson/react-search-panel`
1. `cd example`
1. `npm install`
1. `npm start`

## Usage

### Typescript example

This is an example in Typescript with all available props:

```tsx
import React from "react";
import { SearchPanel } from "react-search-panel";
import "react-search-panel/dist/index.css";

const App = () => {
  const [input, setInput] = React.useState("");
  const [, setSelectedKeys] = React.useState<Array<string>>([]);

  return (
    <SearchPanel
      choices={choices}
      maximumHeight="250px"
      onChange={event => setInput((event as React.ChangeEvent<HTMLInputElement>).target.value)}
      onSelectionChange={selected => setSelectedKeys(selected)}
      noChoiceItem={noChoiceItem}
      placeholder="Search"
      shadow
      small
      value={input}
      variant={SearchPanelVariant.checkbox}
    />
  );
}
export default App;
```

### Javascript

This is an example in Javascript with only the required props.

```jsx
import React from "react";
import { SearchPanel } from "react-search-panel";
import "react-search-panel/dist/index.css";

const App = () => {
  const [input, setInput] = React.useState("");

  return (
    <SearchPanel
      choices={choices}
      onChange={event => setInput(event.target.value)}
      placeholder="Search"
      value={input}
    />
  );
}
export default App;
```
