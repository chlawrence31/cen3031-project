// NavbarComponent.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import LoginSignUp from './LoginSignUpButton';

const NavbarComponent = () => {
  const location = useLocation();

  const brandStyle = {
    fontFamily: 'Copperplate, serif',
    fontSize: '25px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'
  };

  const navLinkStyle = {
    fontFamily: 'Copperplate, serif',
    fontSize: '18px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'
  };

  // Conditionally apply transparency and overlapping
  const navbarBg = location.pathname === '/home' ? 'transparent' : 'dark';
  const navbarStyle = {
    position: location.pathname === '/home' ? 'absolute' : 'relative',
    width: '100%',
    zIndex: '100',
  }; 

  return (
    <div>
      <Navbar bg={navbarBg} variant="dark" expand="lg" style={navbarStyle}>
        <Container>
          <Navbar.Brand as={Link} to="/home" style={brandStyle}>Big Cat Rescue</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <Nav>
              <Nav.Link as={Link} to="/home" style={navLinkStyle}>Home</Nav.Link>
              <Nav.Link as={Link} to="/about" style={navLinkStyle}>About</Nav.Link>
              <Nav.Link as={Link} to="/gallery" style={navLinkStyle}>Gallery</Nav.Link>
              <Nav.Link as={Link} to="/donate" style={navLinkStyle}>Donate</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div style={{ marginRight: '20px' }}>
          <LoginSignUp />
        </div>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
