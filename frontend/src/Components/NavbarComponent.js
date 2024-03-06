import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import LoginSignUp from './LoginSignUpButton'; // Import the LoginSignUp component

const NavbarComponent = () => {
  const location = useLocation();

  const navbarStyle = {
    position: 'absolute', // Set position to absolute
    width: '100%', // Ensure the navbar spans the entire width
    zIndex: '100', // Set a higher z-index value than the slider to ensure on top
  };

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

  // Conditionally apply the 'bg="transparent"' prop if the current route is the homepage
  const navbarBg = location.pathname === '/home' ? 'transparent' : 'dark';

  return (
    <div style={{ position: 'relative' }}>
      <Navbar bg={navbarBg} variant="dark" expand="lg" style={navbarStyle}>
        <Container>
          <Navbar.Brand as={Link} to="/home" style={brandStyle}>Big Cat Rescue</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <Nav>
              <Nav.Link as={Link} to="/home" style={navLinkStyle}>Home</Nav.Link>
              <Nav.Link as={Link} to="/about" style={navLinkStyle}>About</Nav.Link>
              <Nav.Link as={Link} to="/gallery" style={navLinkStyle}>Gallery</Nav.Link>
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
