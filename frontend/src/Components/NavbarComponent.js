import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default class NavbarComponent extends Component {
    render() {
        return (
                <div>
                    <Navbar bg ="dark" variant={"dark"} expand="lg">
                        <Container>
                            <Navbar.Brand as={Link} to="/home">Big Cat Rescue</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                                    <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>  
                </div>
        )
    }
}