import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { SearchPanel, type SearchPanelChoice,SearchPanelVariant } from "."

const mockHandleChange = vi.fn()
const mockHandleSelectionChange = vi.fn()
const mockHandleFocus = vi.fn()
const mockOnClear = vi.fn()

const mockChoice1 = { key: "choice1", description: "Mock choice 1" }
const mockChoice2 = { key: "choice2", description: "Mock another choice" }
const mockChoices: SearchPanelChoice[] = [mockChoice1, mockChoice2]
const noChoiceItem = { key: "none", description: "Mock None" }

describe("SearchPanel", () => {
  beforeEach(() => {
    vi.resetAllMocks()
    render(
      <SearchPanel
        choices={[]}
        clearLabel="Mock clear"
        onChange={mockHandleChange}
        onClear={mockOnClear}
        onFocus={mockHandleFocus}
        onSelectionChange={mockHandleSelectionChange}
        placeholder="Search"
        value="mock default"
      />,
    )
  })

  it("renders a search box with placeholder text", async () => {
    expect(await screen.findByPlaceholderText("Search")).toBeInTheDocument()
  })

  it("calls change handler when input changes", async () => {
    const component = await screen.findByPlaceholderText("Search")
    fireEvent.change(component, { target: { value: "new value" } })
    expect(mockHandleChange).toHaveBeenCalled()
  })

  it("calls onClear when clear button is pressed", async () => {
    const clearButton = await screen.findByTitle("Mock clear")
    fireEvent.click(clearButton)
    expect(mockOnClear).toHaveBeenCalled()
  })

  it("calls focus handler when focused", async () => {
    const component = await screen.findByPlaceholderText("Search")
    fireEvent.focus(component)
    expect(mockHandleFocus).toHaveBeenCalled()
  })
})

describe("SearchPanel with choices", () => {
  beforeEach(() => {
    vi.resetAllMocks()
    render(
      <SearchPanel
        choices={mockChoices}
        variant={SearchPanelVariant.radio}
        noChoiceItem={noChoiceItem}
        onChange={mockHandleChange}
        onSelectionChange={mockHandleSelectionChange}
        placeholder="Search"
        value="mock default"
      />,
    )
  })

  it("keeps choices hidden by default", () => {
    expect(screen.queryAllByText("Mock choice 1")).toHaveLength(0)
  })

  it("displays a none choice when focused", async () => {
    fireEvent.focus(await screen.findByPlaceholderText("Search"))
    expect(await screen.findByText("Mock None")).toBeInTheDocument()
  })

  it("displays choices when focused", async () => {
    fireEvent.focus(await screen.findByPlaceholderText("Search"))
    expect(await screen.findByText("Mock choice 1")).toBeInTheDocument()
  })

  it("selects an item when clicked", async () => {
    fireEvent.focus(await screen.findByPlaceholderText("Search"))
    fireEvent.click(await screen.findByText("Mock choice 1"))
    expect(mockHandleSelectionChange).toHaveBeenCalledWith([mockChoice1])
  })

  it("selects a second radio item", async () => {
    fireEvent.focus(await screen.findByPlaceholderText("Search"))
    fireEvent.click(await screen.findByText("Mock choice 1"))
    fireEvent.click(await screen.findByText("Mock another choice"))
    expect(mockHandleSelectionChange.mock.calls[1]?.[0]).toEqual([mockChoice2])
  })

  it("hides choices when escape is pressed", async () => {
    const search = await screen.findByPlaceholderText("Search")
    fireEvent.focus(search)
    expect(await screen.findByText("Mock choice 1")).toBeInTheDocument()
    fireEvent.keyDown(search, { key: "Escape", code: "Escape" })
    await waitFor(() => {
      expect(screen.queryAllByText("Mock choice 1")).toHaveLength(0)
    })
  })
})

describe("SearchPanel with multiple choice", () => {
  beforeEach(() => {
    vi.resetAllMocks()
    render(
      <SearchPanel
        choices={mockChoices}
        variant={SearchPanelVariant.checkbox}
        noChoiceItem={noChoiceItem}
        onChange={mockHandleChange}
        onSelectionChange={mockHandleSelectionChange}
        placeholder="Search"
        value="mock default"
      />,
    )
  })

  it("selects both items", async () => {
    fireEvent.focus(await screen.findByPlaceholderText("Search"))
    fireEvent.click(await screen.findByText("Mock choice 1"))
    fireEvent.click(await screen.findByText("Mock another choice"))
    expect(mockHandleSelectionChange.mock.calls[1]?.[0]).toEqual([
      mockChoice1,
      mockChoice2,
    ])
  })

  it("selects then de-selects an item", async () => {
    fireEvent.focus(await screen.findByPlaceholderText("Search"))
    fireEvent.click(await screen.findByText("Mock choice 1"))
    expect(mockHandleSelectionChange).toHaveBeenCalledWith([mockChoice1])
    fireEvent.click(await screen.findByText("Mock choice 1"))
    expect(mockHandleSelectionChange.mock.calls[1]?.[0]).toEqual([])
  })

  it("clears all items when none is selected", async () => {
    fireEvent.focus(await screen.findByPlaceholderText("Search"))
    fireEvent.click(await screen.findByText("Mock choice 1"))
    fireEvent.click(await screen.findByText("Mock another choice"))
    fireEvent.click(await screen.findByText("Mock None"))
    expect(mockHandleSelectionChange.mock.calls.at(-1)?.[0]).toEqual([])
  })
})

describe("SearchPanel with link variant", () => {
  beforeEach(() => {
    vi.resetAllMocks()
    render(
      <SearchPanel
        choices={mockChoices}
        variant={SearchPanelVariant.link}
        onChange={mockHandleChange}
        onSelectionChange={mockHandleSelectionChange}
        placeholder="Search"
        value="mock default"
      />,
    )
  })

  it("selects a link when clicked", async () => {
    fireEvent.focus(await screen.findByPlaceholderText("Search"))
    fireEvent.click(await screen.findByText("Mock choice 1"))
    expect(mockHandleSelectionChange).toHaveBeenCalledWith([mockChoice1])
  })
})

describe("SearchPanel with chips", () => {
  beforeEach(() => {
    vi.resetAllMocks()
    render(
      <SearchPanel
        chips
        choices={mockChoices}
        variant={SearchPanelVariant.checkbox}
        noChoiceItem={noChoiceItem}
        onChange={mockHandleChange}
        onSelectionChange={mockHandleSelectionChange}
        placeholder="Search"
        value="mock default"
      />,
    )
  })

  it("displays a chip for selected item", async () => {
    fireEvent.focus(await screen.findByPlaceholderText("Search"))
    fireEvent.click(await screen.findByText("Mock choice 1"))
    expect(await screen.findAllByText("Mock choice 1")).toHaveLength(2)
  })

  it("keeps chip displayed after results collapse", async () => {
    const search = await screen.findByPlaceholderText("Search")
    fireEvent.focus(search)
    fireEvent.click(await screen.findByText("Mock choice 1"))
    fireEvent.keyDown(search, { key: "Escape", code: "Escape" })
    await waitFor(() => {
      expect(screen.getAllByText("Mock choice 1")).toHaveLength(1)
    })
  })
})

describe("SearchPanel with preselected choices", () => {
  beforeEach(() => {
    vi.resetAllMocks()
    render(
      <SearchPanel
        chips
        choices={mockChoices}
        variant={SearchPanelVariant.checkbox}
        noChoiceItem={noChoiceItem}
        onChange={mockHandleChange}
        onSelectionChange={mockHandleSelectionChange}
        placeholder="Search"
        preSelectedChoices={[mockChoice1]}
        value="mock default"
      />,
    )
  })

  it("displays a chip for a preselected item", async () => {
    expect(await screen.findByText("Mock choice 1")).toBeInTheDocument()
  })

  it("removes chip after it is deleted", async () => {
    fireEvent.click(await screen.findByTitle("Delete Mock choice 1"))
    await waitFor(() => {
      expect(screen.queryAllByText("Mock choice 1")).toHaveLength(0)
    })
  })
})

describe("SearchPanel edge cases", () => {
  it("shows a loading indicator", () => {
    render(
      <SearchPanel
        choices={mockChoices}
        isLoading
        onChange={mockHandleChange}
        onSelectionChange={mockHandleSelectionChange}
        placeholder="Search"
        value=""
      />,
    )
    expect(screen.getByLabelText("Loading")).toBeInTheDocument()
  })

  it("applies custom className and floating width styles", async () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => undefined)
    const { container } = render(
      <SearchPanel
        className="custom-panel"
        choices={mockChoices}
        float
        maximumHeight={120}
        onChange={mockHandleChange}
        onSelectionChange={mockHandleSelectionChange}
        placeholder="Search"
        shadow
        small
        value="query"
        width={200}
      />,
    )

    expect(container.querySelector(".custom-panel")).toBeTruthy()
    fireEvent.focus(await screen.findByPlaceholderText("Search"))
    expect(await screen.findByText("Mock choice 1")).toBeInTheDocument()
    expect(warnSpy).toHaveBeenCalled()
    warnSpy.mockRestore()
  })

  it("warns when float is set without width", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => undefined)
    render(
      <SearchPanel
        choices={[]}
        float
        onChange={mockHandleChange}
        onSelectionChange={mockHandleSelectionChange}
        placeholder="Search"
        value=""
      />,
    )
    expect(warnSpy).toHaveBeenCalledWith(
      "Property \"float\" only works when \"width\" is also set.",
    )
    warnSpy.mockRestore()
  })

  it("warns when onClear is provided without clearLabel", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => undefined)
    render(
      <SearchPanel
        choices={[]}
        onChange={mockHandleChange}
        onClear={mockOnClear}
        onSelectionChange={mockHandleSelectionChange}
        placeholder="Search"
        value="filled"
      />,
    )
    expect(warnSpy).toHaveBeenCalledWith(
      "Developer should provide a value for clearLabel.",
    )
    warnSpy.mockRestore()
  })

  it("collapses when focused choices become empty", async () => {
    const { rerender } = render(
      <SearchPanel
        choices={mockChoices}
        onChange={mockHandleChange}
        onSelectionChange={mockHandleSelectionChange}
        placeholder="Search"
        value="query"
      />,
    )

    fireEvent.focus(await screen.findByPlaceholderText("Search"))
    expect(await screen.findByText("Mock choice 1")).toBeInTheDocument()

    rerender(
      <SearchPanel
        choices={[]}
        onChange={mockHandleChange}
        onSelectionChange={mockHandleSelectionChange}
        placeholder="Search"
        value="query"
      />,
    )

    await waitFor(() => {
      expect(screen.queryByText("Mock choice 1")).not.toBeInTheDocument()
    })
  })

  it("collapses on Enter key", async () => {
    render(
      <SearchPanel
        choices={mockChoices}
        onChange={mockHandleChange}
        onSelectionChange={mockHandleSelectionChange}
        placeholder="Search"
        value="query"
      />,
    )
    const search = await screen.findByPlaceholderText("Search")
    fireEvent.focus(search)
    expect(await screen.findByText("Mock choice 1")).toBeInTheDocument()
    fireEvent.keyDown(search, { key: "Enter", code: "Enter" })
    await waitFor(() => {
      expect(screen.queryByText("Mock choice 1")).not.toBeInTheDocument()
    })
  })

  it("supports checkbox selection without a none option", async () => {
    render(
      <SearchPanel
        choices={mockChoices}
        variant={SearchPanelVariant.checkbox}
        onChange={mockHandleChange}
        onSelectionChange={mockHandleSelectionChange}
        placeholder="Search"
        value="query"
      />,
    )
    fireEvent.focus(await screen.findByPlaceholderText("Search"))
    fireEvent.click(await screen.findByText("Mock choice 1"))
    expect(mockHandleSelectionChange).toHaveBeenCalledWith([mockChoice1])
  })

  it("renders small loading and clear controls", async () => {
    render(
      <SearchPanel
        choices={mockChoices}
        clearLabel="Clear"
        isLoading
        onChange={mockHandleChange}
        onClear={mockOnClear}
        onSelectionChange={mockHandleSelectionChange}
        placeholder="Search"
        small
        value="filled"
      />,
    )
    expect(screen.getByLabelText("Loading")).toBeInTheDocument()
    fireEvent.click(await screen.findByTitle("Clear"))
    expect(mockOnClear).toHaveBeenCalled()
  })

  it("ignores preSelectedChoices when omitted on rerender", async () => {
    const { rerender } = render(
      <SearchPanel
        chips
        choices={mockChoices}
        onChange={mockHandleChange}
        onSelectionChange={mockHandleSelectionChange}
        placeholder="Search"
        preSelectedChoices={[mockChoice1]}
        value="query"
      />,
    )

    expect(await screen.findByText("Mock choice 1")).toBeInTheDocument()

    rerender(
      <SearchPanel
        chips
        choices={mockChoices}
        onChange={mockHandleChange}
        onSelectionChange={mockHandleSelectionChange}
        placeholder="Search"
        value="query"
      />,
    )

    expect(screen.getByText("Mock choice 1")).toBeInTheDocument()
  })
})
