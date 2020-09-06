import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Chip from "./Chip";

const mockOnDelete = jest.fn();

describe("Chip component", () => {
  const getChip = (deleteLabel?: string) => {
    return render(
      <Chip
        deleteLabel={deleteLabel}
        value="Mock value"
        onDelete={mockOnDelete}
      />
    );
  };

  it("should display a chip", async() => {
    const view = getChip("Mock delete it");
    const component = await view.findByText("Mock value");
    expect(component).toBeInTheDocument();
  });

  it("should display a chip with delete buton", async() => {
    const view = getChip("Mock delete it");
    const component = await view.container.querySelectorAll("button");
    expect(component.length).toBe(1);
  });

  it("should display a chip without delete buton", async() => {
    const view = getChip();
    const component = await view.container.querySelectorAll("button");
    expect(component.length).toBe(0);
  });

  it("should delete a chip on press", async() => {
    const view = getChip("Mock delete it");
    const component = await view.findByTitle("Mock delete it");
    await fireEvent.click(component);
    expect(mockOnDelete).toHaveBeenCalled();
  });
});
