import React, { Fragment, useEffect, useRef, useState } from "react"
import { Navbar, NavDropdown, Form, FormControl, Button, Nav, Container } from 'react-bootstrap'
import { Link } from "gatsby"

const Header = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const onScroll = () => {
        let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
        setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return window.addEventListener("scroll", onScroll);
    }, []);
    return (
        <header className={`sticky-wrapper arja-navbar-light${scrollTop > 100 ? ' sticky' : ''}`}>
            <Navbar expand="lg" className="ftco_navbar arja-navbar-light site-navbar-target">
                <Container>
                    <Navbar.Brand href="/">Arjun Taneja</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
                        <Nav className="ml-auto">
                            <Nav.Link as={Link} to="/" activeClassName="current"><span>Home</span></Nav.Link>
                            <Nav.Link as={Link} to="/experiences" activeClassName="current"><span>Experiences</span></Nav.Link>
                            <Nav.Link as={Link} to="/projects" activeClassName="current"><span>Projects</span></Nav.Link>
                            <Nav.Link as={Link} to="/blog" activeClassName="current"><span>Blog</span></Nav.Link>
                            <Nav.Link as={Link} to="/contact" activeClassName="current"><span>Get In Touch</span></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
