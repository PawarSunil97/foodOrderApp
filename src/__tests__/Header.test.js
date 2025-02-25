import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../store/appStore";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

describe("load header component", () => {
  it("should load header component with login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    // Check for the toggle button's text, assuming initial text is "LogIn"
    const toggleButton = screen.getByRole("button");
    expect(toggleButton).toBeInTheDocument();
  });
  it("should render header component with card", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    // Check for the toggle button's text, assuming initial text is "LogIn"
    const card = screen.getByText("Card(0 item)");
    expect(card).toBeInTheDocument();
  });
  it("should change log out to login button on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    // Check for the toggle button's text, assuming initial text is "LogIn"
    const loginButton = screen.getByRole("button",{name:"login"});
   fireEvent.click(loginButton);
   expect(loginButton).toBeInTheDocument()
   const logOutButton = screen.getByRole("button",{name:"logout"})
    expect(logOutButton).toBeInTheDocument()
  });
});
