import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginSignUp from './LoginSignUpButton'; // Import the LoginSignUp component

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
        <Navbar.Brand as={Link} to="/home">Big Cat Rescue</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav>
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
        <div style={{marginRight: '20px'}}>
            <LoginSignUp />
        </div>
    </Navbar>
  );
};

export default NavbarComponent;
