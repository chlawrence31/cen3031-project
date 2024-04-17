// NavbarComponent.js
import React from 'react';
import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import LoginSignUp from './LoginSignUpButton';
import axios from 'axios';

const NavbarComponent = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  useEffect(() => {
    // Function to check if user is logged in
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get('/loginCheck');
        setIsLoggedIn(response.data.valid); // Update login status based on response
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };

    checkLoginStatus(); // Call the function when component mounts
  }, []); // Empty dependency array ensures useEffect runs only once on component mount


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
        {isLoggedIn ? (
              // Render different content if user is logged in
              <Nav>
                <Nav.Link as={Link} to="/profile" style={navLinkStyle}>Profile</Nav.Link>
              </Nav>
            ) : (
              // Render login/signup button if user is not logged in
              <div style={{ marginRight: '20px' }}>
                <LoginSignUp />
              </div>
            )}
        </div>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
