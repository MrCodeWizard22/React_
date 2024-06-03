import React from "react";
import ReactDOM from "react-dom";
import "/index.css";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Error } from "./components/Error";
import { RestaurantMenu } from "./components/RestaurantMenu";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { RestaurantMenu } from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/body",
        element: <Body />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurants /: resId",
        element: <RestaurantMenu />,
      },
    ],
  },
  {
    path: "#",
    element: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
