import React from 'react'
import { Form } from 'react-bootstrap'

export default function IntroInfo() {
    return (
        <Form className="">
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="text" placeholder="Имя" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicHeadLine">
                <Form.Control type="text" placeholder="Заголовок (например 'Front-end developer')" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} placeholder="Коротко о себе" />
            </Form.Group>
        </Form>
    )
}
