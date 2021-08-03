import React from 'react'
import { Container,InputGroup,FormControl,Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './SubscribeBlock.scss';

export default function SubscribeBlock() {
    return (
        <section className="subscribe" >
            <Container className="subscribe__block">
                <h2 className="text-center">Subscribe</h2>
                <h5 className="text-center" >Description</h5>
                <InputGroup className="mb-3 mt-5 w-50 mx-auto subscribe__formgroup">
                    <FormControl
                        className="subscribe__form"
                        placeholder="@email"
                        aria-label="@email"
                        aria-describedby="basic-addon2"
                    />
                    <Button className="subscribe__btm" variant="success" id="button-addon2">
                        Subscribe
                    </Button>
                </InputGroup>
            </Container>
        </section>
    )
}
