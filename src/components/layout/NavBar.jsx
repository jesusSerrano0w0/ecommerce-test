// src/components/layout/NavBar.jsx
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "../cart/CartWidget"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor } from "@fortawesome/free-solid-svg-icons";
export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">  <FontAwesomeIcon icon={faAnchor} className="me-2" />bahia tecnologica</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center"> 
            <Nav.Link as={Link} to="/">Catálogo</Nav.Link>
            

            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}