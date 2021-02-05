import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../pages/Home'
import Client from '../pages/Client'
import About from '../pages/About'

class Body extends React.Component{
    render(){
        return (
            <Switch>
                <Route path="/client">
                    <Client />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        );
    }
}
export default Body