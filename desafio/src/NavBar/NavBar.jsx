import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navDiv">
      <h1 className="navTitle">San Justo Sneakers</h1>
      <div className="navListCart">
        <ul className="navList">
          <li className="listItem">Inicio</li>
          <li className="listItem">Productos</li>
          <li className="listItem">Contacto</li>
          <li className="listItem">Quienes Somos?</li>
        </ul>
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;
