/* eslint-disable no-unused-vars */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchPanel, { SearchPanelChoice, SearchPanelVariant } from ".";

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
        placeholder="Search"
        value="mock default"
      />
    );
  });

  it("should have a search box with placeholder text", async() => {
    const component = await screen.findByPlaceholderText("Search");
    expect(component).toBeInTheDocument();
  });

  it("should call change handler when it changes", async() => {
    const component = await screen.findByPlaceholderText("Search");
    await fireEvent.change(component, { target: { value: "new value" } });
    expect(mockHandleChange).toHaveBeenCalled();
  });
});

describe("SearchPanel with choices", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    render(
      <SearchPanel
        choices={mockChoices}
        variant={SearchPanelVariant.radio}
        noChoiceItem={noChoiceItem}
        onChange={mockHandleChange}
        onSelectionChange={mockHandleSelectionChange}
        placeholder="Search"
        value="mock default"
      />
    );
  });

  it("should have choices hidden by default", async() => {
    const choices = await screen.queryAllByText("Mock choice 1");
    expect(choices.length).toBe(0);
  });

  it("should display a choice to select None", async() => {
    (await screen.findByPlaceholderText("Search")).focus();
    screen.findByText("Mock None");
  });

  it("should display choices", async() => {
    (await screen.findByPlaceholderText("Search")).focus();
    const component = await screen.findByText("Mock choice 1");
    expect(component).toBeInTheDocument();
  });

  it("should select an item when it is clicked", async() => {
    (await screen.findByPlaceholderText("Search")).focus();
    const choice = await screen.findByText("Mock choice 1");
    await fireEvent.click(choice);
    expect(mockHandleSelectionChange).toHaveBeenCalledWith(["choice1"]);
  });

  it("should select a second item", async() => {
    (await screen.findByPlaceholderText("Search")).focus();
    const choice1 = await screen.findByText("Mock choice 1");
    await fireEvent.click(choice1);
    const choice2 = await screen.findByText("Mock another choice");
    await fireEvent.click(choice2);
    const changeCall = await mockHandleSelectionChange.mock.calls[2];
    expect(changeCall[0]).toEqual(["choice2"]);
  });

  it("should hide choices when escape key is pressed", async() => {
    const search = await screen.findByPlaceholderText("Search");

    // Verify choices are hidden by default
    const choicees = screen.queryAllByText("Mock choice 1");
    expect(choicees.length).toBe(0);

    // Verify choices are displayed when focus is received
    search.focus();
    screen.findByText("Mock choice 1");

    // Verify choices are hidden again when focus leaves
    fireEvent.keyDown(search, { key: "Escape", code: "Escape" });
    const choicesAfter = screen.queryAllByText("Mock choice 1");
    expect(choicesAfter.length).toBe(0);
  });
});

describe("SearchPanel with multiple choice", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    render(
      <SearchPanel
        choices={mockChoices}
        variant={SearchPanelVariant.checkbox}
        noChoiceItem={noChoiceItem}
        onChange={mockHandleChange}
        onSelectionChange={mockHandleSelectionChange}
        placeholder="Search"
        value="mock default"
      />
    );
  });

  it("should select both items", async() => {
    (await screen.findByPlaceholderText("Search")).focus();
    const choice1 = await screen.findByText("Mock choice 1");
    await fireEvent.click(choice1);
    const choice2 = await screen.findByText("Mock another choice");
    await fireEvent.click(choice2);
    const changeCall = await mockHandleSelectionChange.mock.calls[2];
    expect(changeCall[0]).toEqual(["choice1", "choice2"]);
  });

  it("should de-select all items", async() => {
    (await screen.findByPlaceholderText("Search")).focus();
    // First select two checkboxes
    const choice1 = await screen.findByText("Mock choice 1");
    await fireEvent.click(choice1);
    const choice2 = await screen.findByText("Mock another choice");
    await fireEvent.click(choice2);
    const changeCall = await mockHandleSelectionChange.mock.calls[2];
    expect(changeCall[0]).toEqual(["choice1", "choice2"]);

    // Then select the "None" checkbox
    const noneChoice = await screen.findByText("Mock None");
    await fireEvent.click(noneChoice);

    // Verify no choices are selected
    const deselectCall = await mockHandleSelectionChange.mock.calls[3];
    expect(deselectCall[0]).toEqual([]);
  });
});

describe("SearchPanel with link variant", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    render(
      <SearchPanel
        choices={mockChoices}
        variant={SearchPanelVariant.link}
        onChange={mockHandleChange}
        onSelectionChange={mockHandleSelectionChange}
        placeholder="Search"
        value="mock default"
      />
    );
  });

  it("should select a link when it is clicked", async() => {
    (await screen.findByPlaceholderText("Search")).focus();
    const choice = await screen.findByText("Mock choice 1");
    await fireEvent.click(choice);
    expect(mockHandleSelectionChange).toHaveBeenCalledWith(["choice1"]);
  });
});
