import React from 'react'
import { Col, FormControl, InputGroup } from 'react-bootstrap'

export default function BasicInfo() {
    const arrClassname = [
        { class: 'bi-geo', placeholder: 'Место проживания' },
        { class: 'bi-emoji-sunglasses', placeholder: 'Полных лет' },
        { class: 'bi-phone-vibrate', placeholder: 'Номер телефона' },
        { class: 'bi-globe2', placeholder: 'Web site' },
        { class: 'bi-envelope', placeholder: 'Адрес электронной почты' },
        { class: 'bi-piggy-bank', placeholder: 'Ожидания по зарплате' },

    ]

    const listInput = arrClassname.map(el => {
        return (
            <Col xs={6} key={el.class} >
                <InputGroup className="mb-2">
                    <InputGroup.Text ><i className={`"bi" ${el.class}`}></i></InputGroup.Text>
                    <FormControl  placeholder={el.placeholder} />
                </InputGroup>
            </Col>
        )
    })

    return (
        <>
            {listInput}

        </>
    )
}
