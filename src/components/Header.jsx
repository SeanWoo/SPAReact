import React from 'react';
import { MemoryRouter, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LinkContainer } from 'react-router-bootstrap';

class Header extends React.Component{
    render(){
        return (
            <Navbar bg="dark" variant="dark" expand="sm">
                <Navbar.Brand fg="white" href="#home">ITHub</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/client">
                        <Nav.Link>Client</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default Header