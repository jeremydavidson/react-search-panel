import React, { useEffect } from "react";
import axios from "axios";
import SearchPanel, { SearchPanelChoice } from "react-search-panel";
import "react-search-panel/dist/index.css";

/**
 * Page styles
 */
const styles = {
  container: {
    margin: "auto",
    maxWidth: "650px",
    padding: "40px",
  },
};

/**
 * API URL
 */
const baseUrl = "http://api.tvmaze.com/search/shows?q=";

/**
 * Minimum character count before calling API
 */
const MIN_INPUT = 3;

/**
 * Definition of a Show from tvmaze API
 * @interface Show
 */
interface Show {
  id: string;
  name: string;
}

/**
 * Definition of a Result from tvmaze API
 * @interface Result
 */
export interface Result {
  score: number;
  show: Show;
}

/**
 * A demo application
 * @returns
 */
const App = () => {
  const [input, setInput] = React.useState("");
  const [choices, setChoices] = React.useState<Array<SearchPanelChoice>>([]);

  /**
   * Handle change in search input.
   * @param event
   */
  const handleSearchChange = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setInput(target.value);
  };

  /**
   * Perform a search when input changes.
   */
  useEffect(() => {
    const search = async () => {
      console.log("Search: " + input);
      const resultChoices: Array<SearchPanelChoice> = [];

      // Only perform a search if end user has typed a minimum number of characters
      if (input.length >= MIN_INPUT) {
        const url = `${baseUrl}${input}`;
        const response = await axios(url);
        const results = await response.data;

        // Transform results to choices.
        results.forEach((result: Result) => {
          const choice = { key: result.show.id, description: result.show.name };
          resultChoices.push(choice);
        });
      }
      setChoices(resultChoices);
    };
    search();
  }, [input]);

  return (
    <div style={styles.container}>
      <h1>A demonstration of react-search-panel</h1>
      <p>
        This is a demonstration of react-search-panel:
      </p>
      <div>
        <SearchPanel
          choices={choices}
          isMultiSelect
          isSelectionOptional
          onChange={handleSearchChange}
          placeholder="Search TV shows"
          small
          value={input}
        />
      </div>
      <p>
        This demonstration searches for TV shows when you type at least {MIN_INPUT} characters.
        It uses the public <a href="http://www.tvmaze.com/api#show-search">TVMAZE API</a>.
      </p>
    </div>
  );
};

export default App;
