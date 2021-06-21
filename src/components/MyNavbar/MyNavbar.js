import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import { Navbar, Nav, NavDropdown  } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const MyNavbar = () => {
    
    return (
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            
            <div className="container mb-2">
                
                <LinkContainer to="/">
                    <Navbar.Brand> <h3 className="text-success pt-2">Resort-BD</h3> </Navbar.Brand>
                </LinkContainer>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                
                <Navbar.Collapse id="responsive-navbar-nav">
                    
                    <Nav className="m-auto">
                        
                        <LinkContainer to="/home">
                            <Nav.Link className="mx-3 p-2">Home</Nav.Link>
                        </LinkContainer>
                        
                        

                        <NavDropdown title="Spot" id="responsive-nav-dropdown" className="mx-3 p-2">
                            
                            <LinkContainer to="/dhaka">
                                <NavDropdown.Item >Dhaka</NavDropdown.Item>
                            </LinkContainer>
                            
                            <LinkContainer to="/chittagong">
                                <NavDropdown.Item >Chittagong</NavDropdown.Item>
                            </LinkContainer>
                            
                            <LinkContainer to="/sajek">
                                <NavDropdown.Item >Sajek</NavDropdown.Item>
                            </LinkContainer>

                            <LinkContainer to="/sylhet">
                                <NavDropdown.Item >Sylhet</NavDropdown.Item>
                            </LinkContainer>
                            
                            <LinkContainer to="/bandorban">
                                <NavDropdown.Item >Bandorban</NavDropdown.Item>
                            </LinkContainer>
                            
                            <LinkContainer to="/cox">
                                <NavDropdown.Item >Cox's Bazar</NavDropdown.Item>
                            </LinkContainer>
                            
                       
                        </NavDropdown>
                        
                        
                        <LinkContainer to="/about">
                            <Nav.Link className="mx-3 p-2">About Us</Nav.Link>
                        </LinkContainer>
                        
                        <LinkContainer to="/login">
                            <Nav.Link className="mx-3 p-2">Login</Nav.Link>
                        </LinkContainer>
                        
                        <LinkContainer to="/dashboard">
                            <Nav.Link className="mx-3 p-2">Dashboard</Nav.Link>
                        </LinkContainer>
                        
                        <LinkContainer to="/contact">
                            <Nav.Link className="mx-3 p-2">Contact</Nav.Link>
                        </LinkContainer>
                        
               
      
                    </Nav>
                    
                </Navbar.Collapse>
                
            </div>
            
            </Navbar>

    )
}

export default MyNavbar
