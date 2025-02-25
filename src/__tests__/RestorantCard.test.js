import { render, screen } from "@testing-library/react";
import RestorantCard from "../RestorantCard/RestorantCard";
// import MOCK_DATA from "../mockData/mockData.json";  // Import your mock data
import "@testing-library/jest-dom";  // For matchers like 'toBeInTheDocument'
const MOCK_DATA = {
    info: {
      cloudinaryImageId: "abc123",
      name: "Subway",
      cuisines: ["Fast Food", "Sandwiches"],
      avgRating: 4.5,
      sla: {
        slaString: "30-40 min"
      }
    }
  };
it("should render the restaurant card component with the correct name", () => {
  // Ensure you're passing the data correctly
  render(<RestorantCard data={MOCK_DATA} />);

  // Check if the restaurant name appears in the document
  const nameElement = screen.getByText("Subway");
  expect(nameElement).toBeInTheDocument();

  // Check if the cuisines are rendered correctly
  const cuisinesElement = screen.getByText("Fast Food, Sandwiches");
  expect(cuisinesElement).toBeInTheDocument();

  // Check if the rating is rendered correctly
  const ratingElement = screen.getByText("⭐ 4.5 stars");
  expect(ratingElement).toBeInTheDocument();

  // Check if the delivery time is rendered correctly
  const slaElement = screen.getByText("30-40 min");
  expect(slaElement).toBeInTheDocument();
});
