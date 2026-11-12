import { fireEvent, render, screen } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import Chip from "./Chip"

const mockOnDelete = vi.fn()

describe("Chip component", () => {
  beforeEach(() => {
    mockOnDelete.mockReset()
  })

  it("displays a chip value", async () => {
    render(
      <Chip
        deleteLabel="Mock delete it"
        value="Mock value"
        onDelete={mockOnDelete}
      />,
    )
    expect(await screen.findByText("Mock value")).toBeInTheDocument()
  })

  it("displays a delete button when deleteLabel is provided", () => {
    const { container } = render(
      <Chip
        deleteLabel="Mock delete it"
        value="Mock value"
        onDelete={mockOnDelete}
      />,
    )
    expect(container.querySelectorAll("button")).toHaveLength(1)
  })

  it("hides the delete button when deleteLabel is omitted", () => {
    const { container } = render(
      <Chip
        value="Mock value"
        onDelete={mockOnDelete}
      />,
    )
    expect(container.querySelectorAll("button")).toHaveLength(0)
  })

  it("invokes onDelete when the delete button is pressed", async () => {
    render(
      <Chip
        deleteLabel="Mock delete it"
        value="Mock value"
        onDelete={mockOnDelete}
      />,
    )
    fireEvent.click(await screen.findByTitle("Mock delete it"))
    expect(mockOnDelete).toHaveBeenCalledTimes(1)
  })

  it("places the delete control on the trailing edge of the chip", () => {
    const { container } = render(
      <Chip
        deleteLabel="Mock delete it"
        value="Mock value"
        onDelete={mockOnDelete}
      />,
    )
    const chip = container.firstElementChild as HTMLElement
    const button = screen.getByTitle("Mock delete it")
    const chipStyle = getComputedStyle(chip)
    const buttonStyle = getComputedStyle(button)

    expect(chipStyle.display).toBe("inline-flex")
    expect(buttonStyle.marginTop).toBe(buttonStyle.marginRight)
    expect(buttonStyle.marginBottom).toBe(buttonStyle.marginRight)
    expect(chip.lastElementChild).toBe(button)
  })
})
