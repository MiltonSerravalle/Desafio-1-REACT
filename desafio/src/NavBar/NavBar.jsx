import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (<>
    <body>
    <header className="header">
      <div className="titleDiv">
		<h1 className="logo"><a href="#">Mavsoleo Indumentaria</a></h1>
    </div>
      <ul className="main-nav">
          <li><a className="grow"  href="#">Inicio</a></li>
          <li><a className="grow" href="#">Productos</a></li>
          <li><a className="grow" href="#">Contacto</a></li>
          <li><a className="grow" href="#">Envios</a></li>
      </ul> 
      <div>
        <CartWidget />
      </div>
	</header> 
  </body>
  </>
  );
};

export default NavBar;
