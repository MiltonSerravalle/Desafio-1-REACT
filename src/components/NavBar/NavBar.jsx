import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="body">
        <header className="header">
          <div className="titleDiv">
            <h1 className="logo">
              <NavLink to="/">Mavsoleo Indumentaria</NavLink>
            </h1>
          </div>
          <ul className="main-nav">
            <li>
              <NavLink to="/categoria/zapatillas" className="navButton">
                Zapatillas
              </NavLink>
            </li>
            <li>
              <NavLink to="/categoria/remeras" className="navButton">
                Remeras
              </NavLink>
            </li>
          </ul>
          <div>
            <CartWidget />
          </div>
        </header>
      </div>
    </>
  );
};

export default NavBar;
