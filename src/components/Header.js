import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import Logo from '../assets/logo.png';


function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
        <img src={Logo} width="30" height="30" alt="logo" className="d-inline-block align-top" />{' '} Bruns.Dev
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link as={Link} to="/">
              <FaHome /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              <FaProjectDiagram /> Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              <FaEnvelope /> Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
