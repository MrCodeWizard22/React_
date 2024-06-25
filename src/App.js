import React from "react";
import userContext from "./utils/userContext";
import { useContext, useState, useEffect } from "react";
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
import { RestMenu } from "./components/RestMenu";
import { Provider } from "react-redux";
import { appStore } from "./utils/appStore";

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    const data = {
      name: "Dev Bhai",
    };
    setUserInfo(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
        <div className="App">
          <Header />
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
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
        path: "/restaurants/:id",
        element: <RestMenu />,
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
