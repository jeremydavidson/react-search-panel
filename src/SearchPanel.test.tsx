import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SearchPanel } from "./SearchPanel";

const mockHandleChange = jest.fn();

describe("SearchPanel", () => {
  beforeEach(() => {
    render(
      <SearchPanel
        placeholder='Search mock items'
        onChange={mockHandleChange}
      />
    );
  });

  it("should have a search box with placeholder text", async() => {
    const component = await screen.findByPlaceholderText("Search mock items");
    expect(component).toBeInTheDocument();
  });

  it("should call change handler when it changes", async() => {
    const component = await screen.getByPlaceholderText("Search mock items");
    await fireEvent.change(component, { target: { value: "new value" } });
    expect(mockHandleChange).toHaveBeenCalled();
  });
});
