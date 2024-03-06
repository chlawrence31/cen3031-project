import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Gallery from './Gallery'

export default class NavbarComponent extends Component {
    render() {
        return (
            <Router>
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
                <div>
                   <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/gallery" element={<Gallery />} />
                    </Routes>
                </div>
            </Router>
        )
    }
}