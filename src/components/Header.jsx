import { LOGO_URL } from "../utils/constants";
export const Header = () => {
  return (
    <div className="Header">
      <div className="logoContainer">
        <img alt="Logo" src= {LOGO_URL}/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
