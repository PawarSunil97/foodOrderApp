import { fireEvent, render, screen,act } from "@testing-library/react";
import Body from "../components/Body";
import { useBody } from "../Hooks/useBody";
import mockRestData from "../mockData/mockRestCard.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mockRestData);
    },
  });
});
it("should render body function", () => {
  render(useBody);
});

it("should render the body component and display 2 restaurant cards after search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const RestorantCard = screen.getAllByTestId("cards");
  expect(RestorantCard.length).toBe(20);
  // Find the search button and search box based on the accessible name and test id
  const searchButton = screen.getByRole("button", { name: "Search" });
  const searchBox = screen.getByTestId("search");

  // Simulate typing 'burger' into the search box and clicking search
  fireEvent.change(searchBox, { target: { value: "burger" } });
  fireEvent.click(searchButton);

  // Now query for the rendered restaurant cards.
  // Ensure your component renders cards with data-testid="restCard".
  const cards = screen.getAllByTestId("restCard");

  // Log the cards for debugging (optional)

  // Assert that 2 cards are rendered
  expect(cards.length).toBe(1);
});
it("should render the body component and display 2 restaurant cards after search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardBeforeFilter = screen.getAllByTestId("cards");
  expect(cardBeforeFilter.length).toBe(20);
  // Find the search button and search box based on the accessible name and test id
  const topRatedRestorent = screen.getByRole("button", {
    name: "Filter Restaurants",
  });
  fireEvent.click(topRatedRestorent);

  const cardAfterFilter = screen.getAllByTestId("cards");
  expect(cardAfterFilter.length).toBe(16);
});
