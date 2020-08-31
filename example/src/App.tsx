import React from "react";

import SearchPanel from "react-search-panel";
import "react-search-panel/dist/index.css";

const styles = {
  container: {
    padding: "40px",
  },
  constrained: {
    // margin: "auto",
    // width: "400px",
  }
};

const mockChoices = [
  { key: "choice1", description: "Mock choice" },
  { key: "choice2", description: "Mock another choice" },
];

const noChoiceItem = { key: "none", description: "None" };

const App = () => {
  const [input, setInput] = React.useState("");
  const handleSearchChange = async(event: React.ChangeEvent) => {
    console.log("handleSelectionChange: " + event);
    const target = event.target as HTMLInputElement;
    setInput(target.value);
  };
  const handleSelectionChange = async(selectedKeys: Array<string>) => {
    console.log("handleSelectionChange: " + selectedKeys);
  };

  return (
    <div style={styles.container}>
      <div style={styles.constrained}>
        <SearchPanel
          choices={mockChoices}
          isMultiSelect
          isSelectionOptional
          onChange={handleSearchChange}
          onSelectionChange={handleSelectionChange}
          noChoiceItem={noChoiceItem}
          placeholder="Mock search"
          shadow
          value={input}
          // width={searchWidth}
        />
      </div>
      <p>
        Here is some content underneath. Here is some content underneath. Here is some content underneath.
        Here is some content underneath. Here is some content underneath. <br />
        Here is some content underneath. Here is some content underneath. <br />
      </p>
      <p>
        Here is some content underneath. Here is some content underneath. Here is some content underneath.
        Here is some content underneath. Here is some content underneath. <br />
        Here is some content underneath. Here is some content underneath. <br />
      </p>
      <p>
        Here is some content underneath. Here is some content underneath. Here is some content underneath.
        Here is some content underneath. Here is some content underneath. <br />
        Here is some content underneath. Here is some content underneath. <br />
      </p>
      <p>
        Here is some content underneath. Here is some content underneath. Here is some content underneath.
        Here is some content underneath. Here is some content underneath. <br />
        Here is some content underneath. Here is some content underneath. <br />
      </p>
      <p>
        Here is some content underneath. Here is some content underneath. Here is some content underneath.
        Here is some content underneath. Here is some content underneath. <br />
        Here is some content underneath. Here is some content underneath. <br />
      </p>
    </div>
  );
};

export default App;
