import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import BlockHeader from '../../../secondaryFunc/BlockHeader/BlockHeader';
import FormEducation from './FormEducation/FormEducation';

export default function ResumeDetails() {
    
    const [getId, setGteId] = useState('')
    
    const [componentList, setComponentList] = useState([{elem:<FormEducation/>,id:'1'}])

    
    
    
    const onAddBtnClick=()=>{
        let newId = Date.now()
        let newElem ={
            elem:<FormEducation id={newId} />,
            id:newId
        }
        setComponentList(prevState=> [...prevState ,newElem]);
      };
   
    console.log(getId);
    

    let list = componentList.map((el) => {
        
        
        return <div onClick={e=>setGteId(e.target.id)} key={el.id}>
            {el.elem}
        </div>
    })
    


    return (
        <section className='mt-5 p-2 d-flex flex-column align-items-center '>
            <Container>
                <BlockHeader title={'Образование'} description={"Дайте работодателю информацию о вашем образовании"} />
                <div className="w-100 mb-5">
               
                    {list}
                    <div className="w-100 text-center">
                    <Button variant="link" className="mx-auto" onClick={onAddBtnClick}>
                        Указать еще одно место обучения
                    </Button>
                    </div>
                    
                </div>

                {/* {list} */}
            </Container>
        </section>
    )
}
