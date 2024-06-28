import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import { useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

export const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="Header flex items-center flex-wrap bg-gray-100 p-4">
      <div className="logoContainer flex-shrink-0 mr-4">
        <img alt="Logo" className="h-15 w-14" src={LOGO_URL} />
      </div>
      <div className="nav-items flex-grow lg:flex lg:items-end lg:w-auto justify-end">
        <ul className="flex flex-col lg:flex-row lg:space-x-4 justify-end">
          <li className="mb-2 lg:mb-0 pr-6">UserName : {loggedInUser}</li>
          <li className="mb-2 lg:mb-0 pr-6">
            Online Status : {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="mb-2 lg:mb-0 pr-6">
            <Link
              to="/body"
              className="text-green-500 hover:text-green-700 font-bold"
            >
              Home
            </Link>
          </li>
          <li className="mb-2 lg:mb-0 pr-6">
            <Link
              to="/about"
              className="text-green-500 hover:text-green-700 font-bold"
            >
              About us
            </Link>
          </li>
          <li className="mb-2 lg:mb-0 pr-6">
            <Link
              to="/contact"
              className="text-green-500 hover:text-green-700 font-bold"
            >
              Contact
            </Link>
          </li>
          <li className="mb-2 lg:mb-0 pr-6">
            <Link
              to="/cart"
              className="text-green-500 hover:text-green-700 font-bold"
            >
              Cart ({cartItems.length} items)
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
