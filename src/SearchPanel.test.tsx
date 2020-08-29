/* eslint-disable no-unused-vars */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchPanel, { SearchPanelChoice } from "./SearchPanel";

const mockHandleChange = jest.fn();
const mockHandleSelectionChange = jest.fn();

const mockChoices: SearchPanelChoice[] = [
  { key: "choice1", description: "Mock choice 1" },
  { key: "choice2", description: "Mock another choice" },
];

const noChoiceItem = { key: "none", description: "Mock None" };

describe("SearchPanel", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    render(
      <SearchPanel
        choices={[]}
        onChange={mockHandleChange}
        onSelectionChange={mockHandleSelectionChange}
        placeholder="Search mock items"
        value="mock default"
      />
    );
  });

  it("should have a search box with placeholder text", async() => {
    const component = await screen.findByPlaceholderText("Search mock items");
    expect(component).toBeInTheDocument();
  });

  it("should call change handler when it changes", async() => {
    const component = await screen.findByPlaceholderText("Search mock items");
    await fireEvent.change(component, { target: { value: "new value" } });
    expect(mockHandleChange).toHaveBeenCalled();
    // await screen.findByText("new value");
  });

  it("should display zero choices at first", async() => {
    const choices = await screen.queryAllByText("Mock choice 1");
    expect(choices.length).toBe(0);
  });
});

describe("SearchPanel with choices", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    render(
      <SearchPanel
        choices={mockChoices}
        isSelectionOptional
        noChoiceItem={noChoiceItem}
        onChange={mockHandleChange}
        onSelectionChange={mockHandleSelectionChange}
        placeholder="Search mock items"
        value="mock default"
      />
    );
  });

  it("should display a choice to select None", async() => {
    const component = await screen.findByText("Mock None");
    expect(component).toBeInTheDocument();
  });

  it("should display choices", async() => {
    const component = await screen.findByText("Mock choice 1");
    expect(component).toBeInTheDocument();
  });

  it("should select an item when it is clicked", async() => {
    const choice = await screen.findByText("Mock choice 1");
    await fireEvent.click(choice);
    expect(mockHandleSelectionChange).toHaveBeenCalledWith(["choice1"]);
  });

  it("should select a second item", async() => {
    const choice1 = await screen.findByText("Mock choice 1");
    await fireEvent.click(choice1);
    const choice2 = await screen.findByText("Mock another choice");
    await fireEvent.click(choice2);
    const secondCall = await mockHandleSelectionChange.mock.calls[1];
    expect(secondCall[0]).toEqual(["choice2"]);
  });
});

describe("SearchPanel with multiple choice", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    render(
      <SearchPanel
        choices={mockChoices}
        isMultiSelect
        isSelectionOptional
        noChoiceItem={noChoiceItem}
        onChange={mockHandleChange}
        onSelectionChange={mockHandleSelectionChange}
        placeholder="Search mock items"
        value="mock default"
      />
    );
  });

  it("should select both items", async() => {
    const choice1 = await screen.findByText("Mock choice 1");
    await fireEvent.click(choice1);
    const choice2 = await screen.findByText("Mock another choice");
    await fireEvent.click(choice2);
    const secondCall = await mockHandleSelectionChange.mock.calls[1];
    expect(secondCall[0]).toEqual(["choice1", "choice2"]);
  });

  it("should de-select all items", async() => {
    // First select two checkboxes
    const choice1 = await screen.findByText("Mock choice 1");
    await fireEvent.click(choice1);
    const choice2 = await screen.findByText("Mock another choice");
    await fireEvent.click(choice2);
    const secondCall = await mockHandleSelectionChange.mock.calls[1];
    expect(secondCall[0]).toEqual(["choice1", "choice2"]);

    // Then select the "None" checkbox
    const noneChoice = await screen.findByText("Mock None");
    await fireEvent.click(noneChoice);

    // Verify no choices are selected
    const thirdCall = await mockHandleSelectionChange.mock.calls[2];
    expect(thirdCall[0]).toEqual([]);
  });
});
