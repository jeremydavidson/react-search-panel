# React Search Panel

An expandable React search panel with autocomplete-style results. Results can render as links, checkboxes, or radio buttons, with optional selection chips.

## Demo

![React Search Panel](https://jeremydavidson.github.io/react-search-panel/react-search-panel-demo.gif)

- [Live demo](https://jeremydavidson.github.io/react-search-panel/demo) (`example/`)
- [Storybook](https://jeremydavidson.github.io/react-search-panel/storybook)
- [API docs](https://jeremydavidson.github.io/react-search-panel/doc)

## Requirements

- Node.js 20+
- React 18 or 19

## Install

```bash
npm install react-search-panel
```

## Usage

```tsx
import { useState } from "react"
import {
  SearchPanel,
  SearchPanelVariant,
  type SearchPanelChoice,
} from "react-search-panel"
import "react-search-panel/style.css"

const choices: SearchPanelChoice[] = [
  { key: "1", description: "First result" },
  { key: "2", description: "Second result" },
]

export const App = () => {
  const [input, setInput] = useState("")
  const [selectedChoices, setSelectedChoices] = useState<SearchPanelChoice[]>([])

  return (
    <SearchPanel
      chips
      choices={choices}
      clearLabel="Clear search"
      float
      maximumHeight={250}
      noChoiceItem={{ key: "none", description: "None" }}
      onChange={(event) => setInput(event.target.value)}
      onClear={() => setInput("")}
      onSelectionChange={setSelectedChoices}
      placeholder="Search"
      preSelectedChoices={selectedChoices}
      shadow
      small
      value={input}
      variant={SearchPanelVariant.checkbox}
      width={300}
    />
  )
}
```

### Required props

- `choices`
- `onChange`
- `onSelectionChange`
- `placeholder`
- `value`

### Optional chips

Selection chips render **only when** `chips={true}` **and** there is at least one selected choice (`preSelectedChoices` or a user selection). They are off by default, so layout-focused Storybook stories such as Default, Small, and Shadow do not show chips unless you toggle the `chips` control. Checkbox/radio selection stories enable `chips` to demonstrate that UI.

## Local development

```bash
npm install
npm run typecheck
npm run lint
npm run test
npm run build
npm run storybook
```

### Example app

```bash
npm run build
cd example
npm install
npm start
```

### End-to-end tests

```bash
npx playwright install chromium
npm run test:e2e
```

## Scripts

| Script | Description |
| --- | --- |
| `npm run build` | Build ESM/CJS bundles and type declarations |
| `npm run test` | Unit tests with Vitest coverage (90%+ gate) |
| `npm run test:e2e` | Playwright tests against Storybook |
| `npm run storybook` | Component explorer |
| `npm run typecheck` | TypeScript project check |
| `npm run lint` | ESLint flat config |
| `npm run release` | Bump version, commit, tag, push, and `npm publish` |
| `npm run sync-version` | Bump/sync `package.json` version without releasing |

### Release

Requires a clean git working tree. Defaults to a patch bump:

```bash
npm run release
npm run release -- --minor
npm run release -- --major
npm run release -- --dry-run
npm run release -- --no-publish
npm run release -- --otp 123456
```

## License

MIT
