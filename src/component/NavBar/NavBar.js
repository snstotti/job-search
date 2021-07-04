import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Container,Form,Button,ListGroup} from 'react-bootstrap'

export default function NavBarBlock() {

    const additionalMenuList = ()=>{
        return(
            <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        )
    }

    return (
        <Container>
            <Navbar bg="transparent" expand="lg" className="mw-90 mr-auto">
                <Navbar.Brand href="#home">Job Search</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className=" m-auto">
                        <Nav.Link onMouseOver={'fffff'} href="#home">HOME</Nav.Link>
                        <Nav.Link href="#link">POSITION</Nav.Link>
                        <Nav.Link href="#link">RESUME</Nav.Link>
                        <Nav.Link href="#link">COMPANY</Nav.Link>
                        <Nav.Link href="#link">PAGES</Nav.Link>
                    </Nav>
                   
                </Navbar.Collapse>
                <Form inline>
                        <Button variant="outline-primary mr-2">Log In</Button>
                        <Button variant="outline-primary">Sign Up</Button>
                    </Form>
            </Navbar>
        </Container>
        
    )
}
