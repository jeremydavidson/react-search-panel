import React from "react";
import styles from "./Chip.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

/**
 * Properties for Chip component
 */
interface ChipProps {

  /**
   * Label for tooltip on the delete button.
   */
  deleteLabel?: string;

  /**
   * A handler for when delete button is pressed.
   */
  onDelete: (event: React.MouseEvent) => void;

  /**
   * Text value to display on Chip.
   */
  value: string;
}

/**
 * A Chip component
 * @param props
 */
const Chip = (props: ChipProps) => {
  const { deleteLabel, onDelete, value } = props;
  return (
    <div className={styles.chip}>
      <span className={styles.chipLabel}>{value}</span>
      {deleteLabel && (
        <button onClick={onDelete} title={deleteLabel} className={styles.chipDeleteContainer}>
          <FontAwesomeIcon icon={faTimes} className={`${styles.chipClose}`} />
        </button>
      )}
    </div>
  );
};

export default Chip;
