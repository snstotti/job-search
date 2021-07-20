import React from 'react'
import {Container,Navbar,Nav,Button,Form} from 'react-bootstrap'
import ExtraList from './ExtraList/ExtraList'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {

    const arr = ['HOME','POSITION','RESUME','COMPANY','PAGES' ]
    const list = arr.map(el=><Nav.Link  href={el.toLowerCase()}> <ExtraList title={el} /> </Nav.Link>)

    return (

        <header className="position-absolute w-100 top-0 left-0">
            <Container>
            <Navbar bg="" expand="lg">
            <Navbar.Brand href="#home">Job Search</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        {list}
                    </Nav>
                </Navbar.Collapse>
                <Form inline>
                    <Button variant="outline-primary mr-2">Log In</Button>
                    <Button variant="outline-primary">Sign Up</Button>
                </Form>
            </Navbar>
                
            </Container>
        </header>
    )
}
