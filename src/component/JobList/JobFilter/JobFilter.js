import React from 'react'
import { Form, Button, Container, } from 'react-bootstrap'
import './JobFilter.scss'

export default function JobFilter() {
    let reffs = [1,2,3,4,5,5]
    return (
        <div className="job-filter">

            <Form className="mb-3 d-flex justify-content-around w-100">

                <Form.Group className="mb-3 mt-3 w-25" controlId="">

                    <Form.Control className="p-3" type="text" placeholder="Enter email" />


                </Form.Group>
                <Form.Group className="mb-3 mt-3 w-25" controlId="">

                    <Form.Control className="p-3" type="text" placeholder="Enter email" />


                </Form.Group>
                
                <Form.Group className="mb-3 mt-3 w-25" controlId="">
                    
                    <Form.Control
                        as="select"
                        defaultValue='9'
                       onChange={val=>console.log(val)}
                    >
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </Form.Control>


                </Form.Group>

               

            </Form>
            
        </div>
    )
}