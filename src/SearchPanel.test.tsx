/* eslint-disable no-unused-vars */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SearchPanel, SearchPanelChoice } from "./SearchPanel";

const mockHandleChange = jest.fn();

const mockChoices: SearchPanelChoice[] = [
  { key: "choice1", description: "Mock choice 1" },
  { key: "choice2", description: "Mock another choice" },
];

describe("SearchPanel", () => {
  beforeEach(() => {
    render(
      <SearchPanel
        choices={[]}
        placeholder="Search mock items"
        onChange={mockHandleChange}
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
    render(
      <SearchPanel
        choices={mockChoices}
        placeholder="Search mock items"
        onChange={mockHandleChange}
        value="mock default"
      />
    );
  });

  it("should display choices", async() => {
    const component = await screen.findByText("Mock choice 1");
    expect(component).toBeInTheDocument();
  });
});
