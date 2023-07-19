import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

export class Navigate extends Component{

    render(){
        return(
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                        Home
                    </NavLink>

                    <NavLink className="d-inline p-2 bg-dark text-white" to="/Student">
                        Student
                    </NavLink>
                    
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/NewMultiForm">
                        Multiple Registrations
                    </NavLink>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}