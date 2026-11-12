import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { ChoiceItem } from "./ChoiceItem"

const choice = { key: "choice-1", description: "Choice one" }

describe("ChoiceItem", () => {
  it("renders a link for text variant", () => {
    const onLinkPress = vi.fn()
    render(
      <ChoiceItem
        choice={choice}
        isSelected={false}
        isText
        isMultiSelect={false}
        onCheckChanged={vi.fn()}
        onLinkPress={onLinkPress}
      />,
    )

    fireEvent.click(screen.getByText("Choice one"))
    expect(onLinkPress).toHaveBeenCalledTimes(1)
  })

  it("renders a checkbox for multi-select", () => {
    const onCheckChanged = vi.fn()
    render(
      <ChoiceItem
        choice={choice}
        isSelected
        isText={false}
        isMultiSelect
        small
        onCheckChanged={onCheckChanged}
        onLinkPress={vi.fn()}
      />,
    )

    const input = screen.getByRole("checkbox")
    expect(input).toBeChecked()
    fireEvent.click(input)
    expect(onCheckChanged).toHaveBeenCalledTimes(1)
  })

  it("renders a radio for single-select", () => {
    render(
      <ChoiceItem
        choice={choice}
        isSelected={false}
        isText={false}
        isMultiSelect={false}
        onCheckChanged={vi.fn()}
        onLinkPress={vi.fn()}
      />,
    )

    expect(screen.getByRole("radio")).not.toBeChecked()
  })
})
