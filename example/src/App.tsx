import React, { useEffect } from "react";
import axios from "axios";
import { SearchPanel, SearchPanelChoice, SearchPanelVariant } from "react-search-panel";

/**
 * Page styles
 */
const styles = {
  container: {
    margin: "auto",
    maxWidth: "650px",
    padding: "40px",
  },
  formItem: {
    marginLeft: "15px",
  },
  formLabel: {
    marginLeft: "5px",
  },
  selected: {
    color: "#114488",
  }
};

/**
 * API URL
 */
const baseUrl = "https://api.tvmaze.com/search/shows?q=";

/**
 * Minimum character count before calling API
 */
const MIN_INPUT = 3;

/**
 * Definition of a Show from tvmaze API
 * @interface Show
 */
export interface Show {
  id: string;
  name: string;
}

/**
 * Definition of a result from tvmaze API
 * @interface Result
 */
export interface ShowContainer {
  score: number;
  show: Show;
}

/**
 * A demo application
 * @returns
 */
const App = () => {
  const [input, setInput] = React.useState("");
  const [variant, setVariant] = React.useState<SearchPanelVariant>(SearchPanelVariant.link);
  const [choices, setChoices] = React.useState<Array<SearchPanelChoice>>([]);
  const [selectedChoices, setSelectedChoices] = React.useState<Array<string>>([]);

  /**
   * Handle change in search input.
   * @param event
   */
  const handleSearchChange = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setInput(target.value);
  };

  // const handleSelectionChange = (selectedKeys: Array<string>) {

  // }

  /**
   * Perform a search when input changes.
   */
  useEffect(() => {
    const search = async () => {
      const resultChoices: Array<SearchPanelChoice> = [];

      // Only perform a search if end user has typed a minimum number of characters
      if (input.length >= MIN_INPUT) {
        const url = `${baseUrl}${input}`;
        const response = await axios(url);
        const results = await response.data;

        // Transform results to choices.
        results.forEach((result: ShowContainer) => {
          const choice = { key: result.show.id, description: result.show.name };
          resultChoices.push(choice);
        });
      }
      setChoices(resultChoices);
    };
    search();
  }, [input]);

  interface VariantChoiceProps {
    label: string;
    variantChoice: SearchPanelVariant;
  }

  const VariantChoice = (props: VariantChoiceProps) => {
    const { label, variantChoice } = props;
    return (
      <label style={styles.formItem}>
        <input
          key={label}
          type="radio"
          value={variantChoice}
          tabIndex={0}
          checked={variant === variantChoice}
          onChange={() => setVariant(variantChoice)}
        />
        <span style={styles.formLabel}>
          {label}
        </span>
      </label>
    );
  };

  return (
    <div style={styles.container}>
      <h1>A demonstration of react-search-panel</h1>
      <p>
        This demonstration searches for TV shows when you type at least {MIN_INPUT} characters.
        It uses the public <a href="http://www.tvmaze.com/api#show-search">TVMAZE API</a>.
      </p>
      <p>
        Configure variant:
        <VariantChoice label="Checkbox" variantChoice={SearchPanelVariant.checkbox} />
        <VariantChoice label="Link" variantChoice={SearchPanelVariant.link} />
        <VariantChoice label="Radio" variantChoice={SearchPanelVariant.radio} />
      </p>
      <div>
        <SearchPanel
          choices={choices}
          onChange={handleSearchChange}
          onSelectionChange={selected => setSelectedChoices(selected)}
          placeholder="Search TV shows"
          small
          value={input}
          variant={variant}
        />
      </div>
      <p style={styles.selected}>
        Selected: {JSON.stringify(selectedChoices)}
      </p>
    </div>
  );
};

export default App;
