import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App, { ShowContainer } from "./App";
import { rest } from "msw";
import { setupServer } from "msw/node";

const mockResponse: Array<ShowContainer> = [{ score: 4, show: { id: "mock1", name: "Mock show title" } }];

const server = setupServer(
  rest.get("http://api.tvmaze.com/search/shows?q=12345", (req, res, ctx) => {
    console.log("req: " + JSON.stringify(req));
    return res(ctx.json(mockResponse));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("SearchPanel", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("should display a search field", () => {
    screen.findByPlaceholderText("Search TV shows");
  });

  it("shouldn't display results if user hasn't entered enough characters", async () => {
    const component = await screen.findByPlaceholderText("Search TV shows");
    fireEvent.change(component, { event: { target: { value: "12" } } });
    const items = await screen.queryAllByText("Mock show title");
    expect(items.length).toBe(0);
  });

  it("should display results when user has entered enough characters", async () => {
    const component = await screen.findByPlaceholderText("Search TV shows");
    await fireEvent.change(component, { target: { value: "12345" } });
    screen.findByText("Mock show title");
  });
});
