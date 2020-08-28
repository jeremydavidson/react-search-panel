import React from "react";
import { SearchPanel } from "./SearchPanel";

export default {
  title: "SearchPanel",
};

export const Primary = () => {
  const handleChange = () => {

  };

  return (
    <SearchPanel placeholder='Title 1' onChange={handleChange} />
  );
};
