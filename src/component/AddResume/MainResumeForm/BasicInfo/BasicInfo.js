import React from 'react'
import {  FormControl, InputGroup } from 'react-bootstrap'

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
            
                <InputGroup key={el.class} className="m-2 w-auto ">
                    <InputGroup.Text ><i className={`"bi" ${el.class}`}></i></InputGroup.Text>
                    <FormControl  placeholder={el.placeholder}  className=""/>
                </InputGroup>
           
        )
    })

    return (
        <div className="d-flex justify-content-between  flex-wrap w-auto">
            {listInput}

        </div>
    )
}
