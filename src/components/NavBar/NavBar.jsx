import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="body">
        <header className="header">
          <div className="titleDiv">
            <h1 className="logo">
              <a href="#">Mavsoleo Indumentaria</a>
            </h1>
          </div>
          <ul className="main-nav">
            <li>
              <a className="navButton" href="#">
                Zapatillas
              </a>
            </li>
            <li>
              <a className="navButton" href="#">
                
                Remeras
              </a>
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
