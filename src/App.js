import React from "react";
import ReactDOM from "react-dom";
import "/index.css";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

// export const RES_CDN_URL =
//   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.91378&lng=78.080016&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

// export const MENU_CDN_URL =
//   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.913562&lng=78.080701&restaurantId=";
