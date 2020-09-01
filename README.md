# React Search Panel

A react search panel that expands, autocompletes, and support single or multi select.

## Demo

There is a [demonstration of react-search-panel](https://jeremydavidson.github.io/react-search-panel/demo) as coded in the `example` folder.

Many other variants of this component are demonstrated in this [Storybook demonstration](https://jeremydavidson.github.io/react-search-panel/storybook).

## Documentation

Here is [documentation of the component API](https://jeremydavidson.github.io/react-search-panel/doc).

## Usage

### Typescript example

This is an example in Typescript with all available props:

```typescript
    import React from "react";
    import SearchPanel from "react-search-panel";
    import "react-search-panel/dist/index.css";

    const App = () => {
      const [input, setInput] = React.useState("");
      const [, setSelectedKeys] = React.useState<Array<string>>([]);

      return (
        <SearchPanel
          choices={choices}
          isMultiSelect
          isSelectionOptional
          onChange={event => setInput((event as React.ChangeEvent<HTMLInputElement>).target.value)}
          onSelectionChange={selected => setSelectedKeys(selected)}
          noChoiceItem={noChoiceItem}
          placeholder="Search"
          shadow
          small
          value={input}
        />
      );
    }
    export default App;
```

### Javascript

This is an example in Javascript with only the required props.

```javascript
    import React from "react";
    import SearchPanel from "react-search-panel";
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

## Scripts

- `npm run doc`: `"typedoc --out docs --theme markdown src"`
- `npm run doc`: `"typedoc --options ./typedocconfig.ts"`
- `npm run predeploy`: `"predeploy": "cd example && npm install && npm run build",`
