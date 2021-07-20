import React from 'react'
import {Container,Alert,Nav,Button} from 'react-bootstrap'

export const AlertComponent = () => {
    return (
        <Container>
            <Alert show={true} variant="success" style={{ marginTop: 150, textAlign: 'center'}}>
                <Alert.Heading>Ohh sorry</Alert.Heading>
                <p>
                    Sorry, but the pages are not ready yet, come back a little later,
                    application under development
                </p>
                <hr />
                <Button variant="outline-primary mr-2">
                    <Nav.Link href="/home">Back</Nav.Link>
                </Button>
            </Alert>
        </Container>
    )
}
