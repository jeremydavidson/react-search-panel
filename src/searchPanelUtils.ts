import type { SearchPanelChoice } from "./SearchPanel"

export const MIN_PANEL_WIDTH = 254

/**
 * Returns the index of a choice within a list by key.
 */
export const getChoiceIndex = (
  choice: SearchPanelChoice,
  choices: SearchPanelChoice[],
): number => choices.findIndex((eachChoice) => eachChoice.key === choice.key)

/**
 * Clamps configured panel width to the supported minimum.
 */
export const resolvePanelWidth = (width?: number): number | undefined => {
  if (width === undefined) {
    return undefined
  }

  if (width < MIN_PANEL_WIDTH) {
    return MIN_PANEL_WIDTH
  }

  return width
}

/**
 * Removes a choice from a selection list by key.
 */
export const removeSelectedChoice = (
  choice: SearchPanelChoice,
  updateChoices: SearchPanelChoice[],
): void => {
  const index = getChoiceIndex(choice, updateChoices)
  if (index > -1) {
    updateChoices.splice(index, 1)
  }
}

/**
 * Adds a choice to the selection list, clearing prior picks for single-select.
 */
export const addSelectedChoice = (
  choice: SearchPanelChoice,
  updateChoices: SearchPanelChoice[],
  isMultiSelect: boolean,
): void => {
  if (isMultiSelect) {
    updateChoices.push(choice)
    return
  }

  updateChoices.splice(0, updateChoices.length)
  updateChoices.push(choice)
}
