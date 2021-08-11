import React from 'react'
import { Container, Navbar, Nav, Button, Form } from 'react-bootstrap'
import './NavBar.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {

    const arr = ['HOME', 'POSITION', 'RESUME', 'COMPANY', 'PAGES']
    const list = arr.map(el => <Nav.Link key={el} className="navbar__navLink" href={el.toLowerCase()}> {el} </Nav.Link>)

    return (
        <>
            <Navbar
                variant="dark"
                style={{ position: 'absolute', top: 10, background: '#1f1d1db0', mixBlendBmode: 'difference' }} expand="lg"
                className="">
                <Container>
                    <Navbar.Brand href="#home">Job Search</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto ">
                            {list}
                        </Nav>

                        <Form inline>
                            <Button variant="outline-primary mr-2">Log In</Button>
                            <Button variant="outline-primary">Sign Up</Button>
                        </Form>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    ) 
}
