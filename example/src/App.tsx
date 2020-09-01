import React from "react";
import SearchPanel from "react-search-panel";
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
  const [, setSelectedKeys] = React.useState<Array<string>>([]);

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
          isSelectionOptional
          onChange={event => setInput((event as React.ChangeEvent<HTMLInputElement>).target.value)}
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
      <p>
        Ut gravida libero elit, lacinia gravida nunc placerat vitae. Morbi pellentesque lacus ac ipsum cursus, eu euismod ex rutrum. Nunc vel finibus diam. Aenean feugiat cursus lacus, at dapibus lorem tristique ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum tristique orci nisi. Phasellus sit amet blandit risus, at suscipit purus. Morbi iaculis sapien augue, ac dapibus velit fermentum sit amet.
      </p>
      <p>
        Sed interdum maximus placerat. Proin iaculis, leo sit amet vehicula pretium, dui tortor euismod felis, eu maximus ex ante ac eros. Integer tincidunt risus vitae fermentum ornare. Nulla arcu nisl, dignissim id est vitae, imperdiet egestas tortor. Nulla porta, nisi a finibus tristique, turpis elit placerat libero, ac imperdiet nisi sapien sed nisl. Mauris at feugiat risus. Sed efficitur convallis sapien. Praesent maximus aliquam mi, in commodo ipsum consectetur vitae. Sed porta in turpis vitae laoreet. Donec sodales rutrum orci, vitae tincidunt lacus tincidunt vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ante purus, accumsan vitae eleifend id, accumsan et metus. Ut facilisis mauris eget elit ultricies, et consequat eros congue. Nullam tempus rutrum dolor, sit amet vulputate felis ornare vel.
      </p>
      <p>
        Curabitur euismod magna sed massa fringilla sagittis. Etiam sed dui rhoncus, tempor justo non, sodales dui. Pellentesque vulputate aliquam risus, sed pulvinar enim molestie gravida. Suspendisse eros lectus, dictum et bibendum id, iaculis ac est. Mauris luctus orci quam, commodo iaculis lectus venenatis non. Vivamus sollicitudin sem eget erat pretium tincidunt. Vestibulum bibendum semper risus eget tincidunt. Etiam quis libero non orci pharetra sagittis vel a felis. Maecenas lobortis consectetur sem ac lobortis. Nulla ornare urna vel dolor convallis blandit.
      </p>
      <p>
        Vivamus dictum lacus nec quam egestas, sit amet tempus eros dignissim. Sed malesuada risus sit amet risus tempus mattis. Nunc fermentum ex vel consectetur ultricies. Suspendisse velit neque, auctor pellentesque ante et, ultricies feugiat elit. In et est iaculis, venenatis urna in, tristique tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate elit urna, id fringilla ligula facilisis ultricies.
      </p>
    </div>
  );
};

export default App;
