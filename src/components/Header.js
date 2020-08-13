import React, { Fragment, useEffect, useRef, useState } from "react"
import { Navbar, NavDropdown, Form, FormControl, Button, Nav, Container } from 'react-bootstrap'
import { Link } from "gatsby"

const Header = () => {
    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    const onScroll = () => {
        let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
        if (currentPosition > scrollTop + 62) {
            // downscroll code
            setScrolling(false);
        } else {
            // upscroll code
            setScrolling(true);
        }
        setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return window.addEventListener("scroll", onScroll);
    }, []);
    console.info('scrollTop:', scrolling)
    return (
        <header className={`sticky-wrapper ftco-navbar-light${scrollTop ? ' sticky' : ''}`}>
            <Navbar expand="lg" className="ftco-navbar-light">
                <Container>
                    <Navbar.Brand href="#home">Arjun Taneja</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
                        <Nav className="ml-auto">
                            <Nav.Link as={Link} to="/" activeClassName="current">Home</Nav.Link>
                            <Nav.Link as={Link} to="/experiences" activeClassName="current">Experiences</Nav.Link>
                            <Nav.Link as={Link} to="/projects" activeClassName="current">Projects</Nav.Link>
                            <Nav.Link as={Link} to="/blog" activeClassName="current">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/contact" activeClassName="current">Get In Touch</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
