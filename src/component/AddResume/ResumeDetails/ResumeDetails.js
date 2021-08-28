import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import BlockHeader from '../../../secondaryFunc/BlockHeader/BlockHeader';
import FormSelect from '../../../secondaryFunc/FormSelect/FormSelect'

export default function ResumeDetails() {
    const [state, setstate] = useState('')
    console.log(state);
    const listSelect =['Среднее','Среднее специальное','Неоконченное высшее','Высшее','Баколавр','Магистр','Кандидат наук','Доктор наук']
    return (
        <section className='mt-5 p-2 d-flex flex-column align-items-center '>
            <Container>
            <BlockHeader title={'Образование'} description={"Дайте работодателю информацию о вашем образовании"} />
                <div className='w-75 p-4 bg-light mx-auto bg-light border'>
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
                        

                        <Button variant="link" className="mb-3">
                        Указать еще одно место обучения
                        </Button>
                        <Button variant="primary">Сохранить</Button>
                    </Form>
                </div>

            </Container>
        </section>
    )
}
