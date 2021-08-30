import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import FormSelect from '../../../../secondaryFunc/FormSelect/FormSelect'
import './FormEducation.scss'

export default function FormEducation({getId}) {
    const [state, setstate] = useState('')
    console.log(state);
    const listSelect =['Среднее','Среднее специальное','Неоконченное высшее','Высшее','Баколавр','Магистр','Кандидат наук','Доктор наук']
    return (
        <div className='w-75 p-4 mb-3 bg-light mx-auto bg-light border d-flex'>

            <span className="icon-delete" onClick={e=>getId(e)}> <i className="bi bi-x-circle-fill"></i></span>
           
            <Form className='w-50 d-flex flex-column '>
                <Form.Group className="mb-3">
                    <FormSelect label={'Уровень'} listSelect={listSelect} handleChange={setstate} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Учебное заведение</Form.Label>
                    <Form.Control type="text" placeholder="Название или аббривиатура" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Факультет</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Специализация</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3  d-flex" >
                    <div className="mr-3">
                        <Form.Label>Год окончания</Form.Label>
                        <Form.Control type="number" placeholder="Год" />
                    </div>

                    <Form.Text className="text-muted mt-auto">
                        Если учитесь в настоящее время — укажите год предполагаемого окончания
                    </Form.Text>
                </Form.Group>


                <Button variant="primary">Сохранить</Button>
            </Form>
            
           
               
        </div>
    )
}
