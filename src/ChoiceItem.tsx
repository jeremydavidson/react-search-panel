import type { ChangeEvent, MouseEvent } from "react"

import type { SearchPanelChoice } from "./SearchPanel"
import styles from "./styles.module.css"

export interface ChoiceItemProps {
  choice: SearchPanelChoice
  isSelected: boolean
  isText: boolean
  isMultiSelect: boolean
  small?: boolean
  onCheckChanged: (event: ChangeEvent<HTMLInputElement>, choice: SearchPanelChoice) => void
  onLinkPress: (event: MouseEvent<HTMLAnchorElement>, choice: SearchPanelChoice) => void
}

/**
 * Renders a single search result as a link, radio, or checkbox.
 */
export const ChoiceItem = ({
  choice,
  isSelected,
  isText,
  isMultiSelect,
  small = false,
  onCheckChanged,
  onLinkPress,
}: ChoiceItemProps) => {
  const inputType = isMultiSelect ? "checkbox" : "radio"

  return (
    <div className={`${styles.resultItem} ${small ? styles.small : ""}`}>
      {isText ? (
        <a
          href={`#${choice.key}`}
          className={styles.linkChoice}
          onClick={(event) => onLinkPress(event, choice)}
        >
          {choice.description}
        </a>
      ) : (
        <label className={styles.resultItemLabel}>
          <input
            type={inputType}
            onChange={(event) => onCheckChanged(event, choice)}
            value={choice.key}
            checked={isSelected}
            tabIndex={0}
            className={styles.resultItemControl}
          />
          {choice.description}
        </label>
      )}
    </div>
  )
}
