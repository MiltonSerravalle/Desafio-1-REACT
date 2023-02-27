import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/" style={{textDecoration: 'none'}}>
            <Navbar.Brand href="#home">MAVSOLEO INDUMENTARIA</Navbar.Brand>
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/categoria/zapatillas" style={{textDecoration: 'none'}}>
              <Nav.Link href="#features">Zapatillas</Nav.Link>
            </NavLink>
            <NavLink to="/categoria/remeras" style={{textDecoration: 'none'}}>
              <Nav.Link href="#pricing">Remera</Nav.Link>
            </NavLink>
            <NavLink to="/cart">
              <CartWidget />
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
