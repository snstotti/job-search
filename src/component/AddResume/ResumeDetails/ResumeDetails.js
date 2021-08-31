import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import BlockHeader from '../../../secondaryFunc/BlockHeader/BlockHeader';
import FormEducation from './FormEducation/FormEducation';
import './ResumeDetail.scss'

export default function ResumeDetails() {
    const [componentList, setComponentList] = useState([{ elem: <FormEducation />, id: '1' }])

    function getIdParent(e) {
        let idParent = e.target.parentElement.parentElement.id
        setComponentList(componentList.filter(item=>item.id !== idParent))
    }

    const onAddBtnClick = () => {
        let id = Date.now()
        let newElem = {
            elem: <FormEducation />,
            id: String(id)
        }
        setComponentList(prevState => [...prevState, newElem]);
    };

    let list = componentList.map((el) => {
        return (
            <div key={el.id} id={el.id}>
                <span 
                    className="icon-delete" 
                    onClick={getIdParent}>
                    <i className="bi bi-x-circle-fill"></i>
                </span>
                {el.elem}
            </div>
        )
    })

    return (
        <section className='mt-5 p-2 d-flex flex-column align-items-center '>
            <Container>
                <BlockHeader title={'Образование'} description={"Дайте работодателю информацию о вашем образовании"} />
                <div className="w-100 mb-5">
                    <div>
                        {list}
                    </div>
                    <div className="w-100 text-center">
                        <Button variant="link" className="mx-auto" onClick={onAddBtnClick}>
                            Указать еще одно место обучения
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}
