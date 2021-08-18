import React from 'react'
import { Col, FormControl, InputGroup } from 'react-bootstrap'

export default function BasicInfo() {
    const arrClassname = [
        { class: 'bi-geo', placeholder: 'Место проживания' },
        { class: 'bi-clock-history', placeholder: 'Полных лет' },
        { class: 'bi-briefcase', placeholder: 'Номер телефона' },
        { class: 'bi-lightbulb', placeholder: 'Web site' },
        { class: 'bi-piggy-bank', placeholder: 'Ожидания по зарплате' },
        { class: 'bi-piggy-bank', placeholder: 'Ожидания по зарплате' },

    ]

    const listInput = arrClassname.map(el => {
        return (
            <Col xs={6}>
                <InputGroup className="mb-2">
                    <InputGroup.Text ><i className={`"bi" ${el.class}`}></i></InputGroup.Text>
                    <FormControl id="inlineFormInputGroup" placeholder={el.placeholder} />
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
