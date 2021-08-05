import React from 'react'
import {Container,Navbar,Nav,Button,Form} from 'react-bootstrap'
import ExtraList from './ExtraList/ExtraList'
import './Header.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {

    const arr = ['HOME','POSITION','RESUME','COMPANY','PAGES' ]
    const list = arr.map(el=><Nav.Link className="header__navLink"  href={el.toLowerCase()}> {el} </Nav.Link>)

    return (

        <header className="header position-absolute w-100 top-0 left-0">

            <Navbar fixed="" variant="dark" style={{background: '#ffffff27', mixBlendBmode: 'difference'}} expand="lg" className="header__navbar ">
                <Container className="position-relative">
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

            
        </header>
    )
}
