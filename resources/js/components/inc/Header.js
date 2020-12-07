import React, { Component } from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { PUBLIC_URL } from '../constants';


const Header = (props) => {
    const logout = () =>{
        localStorage.removeItem('loginData');
        window.location.href = PUBLIC_URL+"login";
    };

    return ( 
        <>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Container>
                    <Link to={`${PUBLIC_URL}`}>
                        <Navbar.Brand>Task Managament System</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="task-navbar-nav" />
                    <Navbar.Collapse id="task-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to={`${PUBLIC_URL}`}>
                            <Nav.Item className="text-white mr-2">Home</Nav.Item>
                        </Link>
                        {
                            props.authData.isLoggedIn && (
                                <Link to={`${PUBLIC_URL}projects`}>
                                    <Nav.Item className="text-white mr-2">Projects</Nav.Item>
                                </Link>
                            )
                        }
                        
                        <Link to={`${PUBLIC_URL}about`}>
                            <Nav.Item className="text-white mr-2">About</Nav.Item>
                        </Link>
                        
                        <Link to={`${PUBLIC_URL}contact`}>
                            <Nav.Item className="text-white mr-2">Contact</Nav.Item>
                        </Link>
                        
                        {
                            !props.authData.isLoggedIn && (
                                <>
                                <Link to={`${PUBLIC_URL}register`}>
                                    <Nav.Item className="text-white mr-2">Sign Up</Nav.Item>
                                </Link>
                                
                                <Link to={`${PUBLIC_URL}login`}>
                                    <Nav.Item className="text-white mr-2">Sign In</Nav.Item>
                                </Link>
                                </>
                            )
                        }
                    </Nav>
                    <Nav className="ml-auto">
                        {
                            props.authData.isLoggedIn && (
                                <>

                                
                                <Nav.Item className="text-white mr-2">Welcome, {props.authData.user.name}</Nav.Item>
                                <Nav.Item className="text-white mr-2">|</Nav.Item>
                                <Link to={`${PUBLIC_URL}logout`} onClick={()=> logout()}>
                                    <Nav.Item className="text-white mr-2">Log Out</Nav.Item>
                                </Link>
                                
                                </>
                            )
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
    
}
 
export default Header;