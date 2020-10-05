import React from "react";
import { SearchPanel } from "react-search-panel";
import "react-search-panel/dist/index.css";

const styles = {
  container: {
    margin: "auto",
    maxWidth: "650px",
    padding: "40px",
  },
  constrained: {
    // margin: "auto",
    // maxWidth: "400px",
  }
};

const choices = [
  { key: "choice1", description: "A choice" },
  { key: "choice2", description: "Another choice" },
  { key: "choice3", description: "A third choice" },
];

const noChoiceItem = { key: "none", description: "None" };

const App = () => {
  const [input, setInput] = React.useState("");
  const [, setSelectedKeys] = React.useState([]);

  return (
    <div style={styles.container}>
      <h1>A demonstration of react-search-panel</h1>
      <p>
        This is a demonstration of react-search-panel:
      </p>
      <div style={styles.constrained}>
        <SearchPanel
          choices={choices}
          isMultiSelect
          onChange={event => setInput(event.target.value)}
          onSelectionChange={selected => setSelectedKeys(selected)}
          noChoiceItem={noChoiceItem}
          placeholder="Search"
          small
          value={input}
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales erat quis enim maximus euismod. Sed viverra eget nisl in auctor. Proin tempus nisl sit amet nunc rhoncus, et imperdiet nisi vestibulum. Praesent tempus interdum sem. Morbi auctor nulla et nibh consequat sodales. Suspendisse et tristique turpis. Praesent sagittis commodo dolor et pretium. Etiam ut eros id felis porta tristique. Sed elementum erat vel rutrum laoreet. Ut at volutpat erat. Donec sit amet mauris ultrices, pulvinar orci sed, dignissim ipsum. Sed nec odio eu tortor condimentum accumsan.
      </p>
    </div>
  );
};

export default App;
