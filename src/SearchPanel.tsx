import * as React from "react";
// import styles from "./styles.module.css";

interface Props {
  placeholder: string,
  onChange: () => void,
}

export const SearchPanel = ({ onChange, placeholder }: Props) => {
  const handleBlur = () => {
    console.log("handleBlur");
  };

  const handleFocus = () => {
    console.log("handleFocus");
  };

  return (
    <div>
      <input
        type='text'
        placeholder={placeholder}
        onChange={onChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
    </div>
  );
};
