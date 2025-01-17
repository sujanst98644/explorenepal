import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AboutNepal from "./pages/AboutNepal";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Destinationdetails from "./components/Destinationdetails";
import Filter from "./pages/filter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutNepal />,
      },
      {
        path: "/destinations",
        element: <Filter />,
      },

      {
        path: "/destinations/:id",
        element: <Destinationdetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
