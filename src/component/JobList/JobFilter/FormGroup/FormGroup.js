import React, { useState } from 'react'

import { Form } from 'react-bootstrap'

export default function FormGroup({placeholder,listCheckbox,type='input'}) {

    const [state, setstate] = useState('')

    console.log(state);

    const input = <Form.Control
        as={type}
        className="p-3 mb-3 "
        type='text'
        value={state}
        placeholder={placeholder}
        onChange={e => setstate(e.target.value)} />

    const select = <Form.Control
        className="mb-3"
        as="select"
        value={type}
        onChange={e => setstate(e.target.value)}
    >
        <option value="DICTUM">Dictamen</option>
        <option value="CONSTANCY">Constancia</option>
        <option value="COMPLEMENT">Complemento</option>
    </Form.Control>

    const list = listCheckbox.map(elem => <Form.Check
        className="text-secondary"
        key={elem}
        type='checkbox'
        id={elem}
        label={elem}
    />)

    const formControl = type ==='input' ? input : select

    return (
        <Form.Group className="mb-3 mt-3 w-25" controlId="">
            {formControl}
            {list}
    </Form.Group>
    )
}
