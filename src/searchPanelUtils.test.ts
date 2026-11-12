import { describe, expect, it } from "vitest"

import {
  addSelectedChoice,
  getChoiceIndex,
  MIN_PANEL_WIDTH,
  removeSelectedChoice,
  resolvePanelWidth,
} from "./searchPanelUtils"

const choiceA = { key: "a", description: "A" }
const choiceB = { key: "b", description: "B" }

describe("searchPanelUtils", () => {
  it("finds a choice index by key", () => {
    expect(getChoiceIndex(choiceB, [choiceA, choiceB])).toBe(1)
    expect(getChoiceIndex(choiceA, [choiceB])).toBe(-1)
  })

  it("resolves panel width with a minimum clamp", () => {
    expect(resolvePanelWidth(undefined)).toBeUndefined()
    expect(resolvePanelWidth(100)).toBe(MIN_PANEL_WIDTH)
    expect(resolvePanelWidth(400)).toBe(400)
  })

  it("removes a selected choice by key", () => {
    const selected = [choiceA, choiceB]
    removeSelectedChoice(choiceA, selected)
    expect(selected).toEqual([choiceB])
  })

  it("ignores removal when choice is absent", () => {
    const selected = [choiceA]
    removeSelectedChoice(choiceB, selected)
    expect(selected).toEqual([choiceA])
  })

  it("adds choices for multi-select", () => {
    const selected = [choiceA]
    addSelectedChoice(choiceB, selected, true)
    expect(selected).toEqual([choiceA, choiceB])
  })

  it("replaces choices for single-select", () => {
    const selected = [choiceA]
    addSelectedChoice(choiceB, selected, false)
    expect(selected).toEqual([choiceB])
  })
})
