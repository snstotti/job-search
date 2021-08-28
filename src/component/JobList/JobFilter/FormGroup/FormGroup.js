import React, { useState } from 'react'

import { Form } from 'react-bootstrap'
import FormSelect from '../../../../secondaryFunc/FormSelect/FormSelect';

export default function FormGroup({placeholder,listCheckbox,type='input'}) {

    const [state, setstate] = useState('')

    console.log(state);

    const listSelect =['Среднее','Среднее специальное','Неоконченное высшее','Высшее','Баколавр','Магистр','Кандидат наук','Доктор наук']

    const input = <Form.Control
        as={type}
        className="p-3 mb-3 "
        type='text'
        value={state}
        placeholder={placeholder}
        onChange={e => setstate(e.target.value)} />

    const select = <FormSelect listSelect={listSelect} handleChange={setstate} />

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
