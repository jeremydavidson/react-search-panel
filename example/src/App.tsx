import React, { useEffect, useState } from "react";
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
  constrained: {
    // margin: "auto",
    // maxWidth: "400px",
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
  id: number;
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

const preselectedChoices: SearchPanelChoice[] = [{ key: "38963", description: "The Mandalorian" }, { key: "563", description: "Star Wars: The Clone Wars" }];

/**
 * A demo application
 * @returns
 */
const App = () => {
  const [input, setInput] = useState("");
  const [variant, setVariant] = useState<SearchPanelVariant>(SearchPanelVariant.checkbox);
  const [choices, setChoices] = useState<Array<SearchPanelChoice>>([]);
  const [selectedChoices, setSelectedChoices] = useState<Array<SearchPanelChoice>>(preselectedChoices);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Handle change in search input.
   * @param event
   */
  const handleSearchChange = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setInput(target.value);
  };

  /**
   * Handle when selections are made.
   * When picking a link variant, clear search box
   * because we would presumably navigate somewhere.
   * @param selectedChoices
   */
  const handleSelectionChange = (selectedChoices: Array<SearchPanelChoice>) => {
    setSelectedChoices(selectedChoices);
    // const combinedDescriptions = selectedChoices.map(choice => (choice.description)).join(" ");
    // setInput(combinedDescriptions);
  };

  useEffect(() => {
    if (variant === SearchPanelVariant.link || variant === SearchPanelVariant.radio) {
      setSelectedChoices([]);
    }
    setInput("");
  }, [variant]);

  /**
   * Perform a search when input changes.
   */
  useEffect(() => {
    const search = async () => {
      setIsLoading(true);
      const resultChoices: Array<SearchPanelChoice> = [];

      // Only perform a search if end user has typed a minimum number of characters
      if (input.length >= MIN_INPUT) {
        const url = `${baseUrl}${input}`;
        const response = await axios(url);
        const results = await response.data;

        // Transform results to choices.
        results.forEach((result: ShowContainer) => {
          const choice = { key: result.show.id.toString(), description: result.show.name };
          resultChoices.push(choice);
        });
      }
      setChoices(resultChoices);
      setIsLoading(false);
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
        When picking a link variant, clear search box to show how that can be done.
      </p>
      <p>
        Configure variant:
        <VariantChoice label="Checkbox" variantChoice={SearchPanelVariant.checkbox} />
        <VariantChoice label="Link" variantChoice={SearchPanelVariant.link} />
        <VariantChoice label="Radio" variantChoice={SearchPanelVariant.radio} />
      </p>
      <div style={styles.constrained}>
        <SearchPanel
          chips
          choices={choices}
          isLoading={isLoading}
          maximumHeight={150}
          onChange={handleSearchChange}
          onClear={() => setInput("")}
          onSelectionChange={handleSelectionChange}
          placeholder="Search TV shows"
          preSelectedChoices={selectedChoices}
          shadow
          float
          value={input}
          variant={variant}
          width="80%"
        />
      </div>
      {/* <p style={styles.selected}>
        Selected: {JSON.stringify(selectedChoices)}
      </p> */}
    </div>
  );
};

export default App;
