import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import routesConfig from "./routes";
import "./index.css";

// Define the routes
const appRouter = createBrowserRouter(routesConfig);

// Get the root element and render the RouterProvider
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
