import React from 'react'
import { Form } from 'react-bootstrap'

export default function FormSelect({label,listSelect,handleChange}) {

    const labelText = !label ? null : <Form.Label>{label}</Form.Label>

    const list = listSelect.map(select=>{
        return <option key={select} value={select}>{select}</option>
    })

    return (
        <Form.Group className="mb-3">
            {labelText}
            <Form.Control onChange={e => handleChange(e.target.value)} as="select">
                {list}
            </Form.Control>
        </Form.Group>
    )
}
