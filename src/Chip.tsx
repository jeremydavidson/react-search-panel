import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { MouseEvent } from "react"

import styles from "./Chip.module.css"

/**
 * Properties for Chip component.
 */
export interface ChipProps {
  /**
   * Label for tooltip on the delete button.
   */
  deleteLabel?: string

  /**
   * A handler for when delete button is pressed.
   */
  onDelete: (event: MouseEvent<HTMLButtonElement>) => void

  /**
   * Text value to display on Chip.
   */
  value: string
}

/**
 * A removable chip used to represent selected search choices.
 */
export const Chip = ({ deleteLabel, onDelete, value }: ChipProps) => {
  return (
    <div className={styles.chip}>
      <span className={styles.chipLabel}>{value}</span>
      {deleteLabel ? (
        <button
          type="button"
          onClick={onDelete}
          title={deleteLabel}
          className={styles.chipDeleteContainer}
        >
          <FontAwesomeIcon icon={faTimes} className={styles.chipClose} />
        </button>
      ) : null}
    </div>
  )
}

export default Chip
