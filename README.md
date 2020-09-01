# React Search Panel

A react search panel that expands, autocompletes, and support single or multi select.

## Demo

There is a [demonstration of react-search-panel](demo/index.html) as coded in the `example` folder.

Many other variants of this component are demonstrated in this [Storybook demonstration](storybook/index.html).

## Documentation

Here is [documentation of the component API](doc/index.html).

## Usage

### Typescript example

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
          onChange={handleSearchChange}
          onSelectionChange={handleSelectionChange}
          noChoiceItem={noChoiceItem}
          placeholder="Search"
          shadow
          small
          value={input}
        />
      );
    }
```

## Scripts

- `npm run doc`: `"typedoc --out docs --theme markdown src"`
- `npm run doc`: `"typedoc --options ./typedocconfig.ts"`
- `npm run predeploy`: `"predeploy": "cd example && npm install && npm run build",`
