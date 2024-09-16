import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import viteLogo from "/vite.svg";
import './NavBar.css'

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top" data-bs-spy="scroll" data-bs-target="#main">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={viteLogo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        pprezp
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto">
          <Nav.Link href="#home" className="active">Inicio</Nav.Link>
          <Nav.Link href="#about">Acerca de mí</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#experience">Experiencia</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavBar;
