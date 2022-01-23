import React from 'react'
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        
        

        <header>
        <Navbar  style={{ backgroundColor: '#003b45'}} variant="dark" expand="lg" collapseOnSelect >
            <Container>
            <LinkContainer to='/'>
                <Navbar.Brand>E-Shop</Navbar.Brand>
            </LinkContainer>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    
                    <LinkContainer to='/login'>
                        
                        <Nav.Link><i class="fas fa-user"></i>&nbsp;Login</Nav.Link>
                    </LinkContainer>
                    
                    
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
                
    )
}

export default Header

