import React, { useEffect, useState } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import viteLogo from "/vite.svg";
import './NavBar.css';

function NavBar() {
  const [navbarClass, setNavbarClass] = useState('transparent');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarClass('opaque');
    } else {
      setNavbarClass('transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className={`${navbarClass}`} sticky="top" data-bs-spy="scroll" data-bs-target="#main">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={viteLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Pablo Pérez
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link href="#home" className="active">Inicio</Nav.Link>
            <Nav.Link href="#about">Acerca de mí</Nav.Link>
            <Nav.Link href="#experience">Experiencia</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
