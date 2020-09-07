import * as React from "react";

interface SearchPanelItem {
  displayComponent: React.ReactNode,
}

const SearchPanelItem = ({ displayComponent }: SearchPanelItem) => {
  return (
    <div className="resultItem">{displayComponent}</div>
  );
};

export default SearchPanelItem;
