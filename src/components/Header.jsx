import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { About } from "./About";
export const Header = () => {
  return (
    <div className="Header">
      <div className="logoContainer">
        <img alt="Logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/body">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
