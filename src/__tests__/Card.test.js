
import RestaurantMenu from "../RestorantCard/RestaurantMenu"
import { fireEvent, render, screen,act } from "@testing-library/react"
import "@testing-library/jest-dom";
import mockData from "../mockData/mockCardMenuData.json"
import { Provider } from "react-redux";
import appStore from "../store/appStore";
import Header from "../components/Header"
import { BrowserRouter } from "react-router";
import Cart from "../RestorantCard/cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(mockData),
  });
});


it("should render the card component", async()=>{
   await act(async()=>{
    render(
      <BrowserRouter>
    <Provider store={appStore}>
        <Header />
        <RestaurantMenu />
        <Cart />
        </Provider>
      </BrowserRouter>
        )
   }) 

   const accordionHeader = screen.getByText("Recommended(20)");
   fireEvent.click(accordionHeader);
   expect(screen.getAllByTestId("foodItems").length).toBe(20);
   expect(screen.getByText("Card(0 item)")).toBeInTheDocument();
   const addBtn = screen.getByRole("button",{name:"ADD +"});
   fireEvent.click(addBtn[0]);
   expect(screen.getByText("Card(1 item)")).toBeInTheDocument();
   fireEvent.click(screen.getByRole("button",{name:"Clear"}));
   expect(screen.getAllByTestId("foodItems").length).toBe(5);
   expect(screen.getByText("Your cart is empty.")).toBeInTheDocument();
})

