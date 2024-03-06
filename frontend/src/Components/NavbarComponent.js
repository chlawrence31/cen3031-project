import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginSignUp from './LoginSignUpButton'; // Import the LoginSignUp component

const NavbarComponent = () => {
  const navbarStyle = {
    fontFamily: 'Copperplate, serif', // Set the font family for the entire Navbar
  };

  const brandStyle = {
    fontSize: '25px' // Set the font size for the brand
  };

  return (
    <div > {/* Apply font style only to the Navbar component */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container style={navbarStyle}>
          <Navbar.Brand as={Link} to="/home" style={brandStyle}>Big Cat Rescue</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <Nav>
              <Nav.Link as={Link} to="/home" style={{ fontSize: '18px' }}>Home</Nav.Link>
              <Nav.Link as={Link} to="/about" style={{ fontSize: '18px' }}>About</Nav.Link>
              <Nav.Link as={Link} to="/gallery" style={{ fontSize: '18px' }}>Gallery</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div style={{marginRight: '20px'}}>
          <LoginSignUp />
        </div>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
