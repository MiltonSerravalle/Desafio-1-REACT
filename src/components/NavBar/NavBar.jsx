import { Container, Nav, Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <NavLink to="/" style={{textDecoration: 'none'}}>
            <Navbar.Brand href="#home">MAVSOLEO INDUMENTARIA</Navbar.Brand>
          </NavLink>
          <NavbarCollapse id="basic-navbar-nav">
          <Nav className="md-auto">
            <NavLink className="m-2 nav-link active" to="/categoria/Zapatillas" style={{textDecoration: 'none'}}>
              Zapatillas
            </NavLink>
            <NavLink className="m-2 nav-link active" to="/categoria/Remeras" style={{textDecoration: 'none'}}>
              Remeras
            </NavLink>
          </Nav>
          </NavbarCollapse>
          <div className="d-flex justify-content-center">
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavLink to="/cart" className="ms-3">
              <CartWidget />
            </NavLink>
            </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
