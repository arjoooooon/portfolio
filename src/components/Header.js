import React from "react"
import { Navbar, NavDropdown, Form, FormControl, Button, Nav, Container } from 'react-bootstrap'
import { Link } from "gatsby"

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const onToggle = val => {
        setIsOpen(!val)
    }
    return (
        <Navbar bg="light" expand="lg">
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
    )
}

export default Header
