import React, { useState } from 'react'
import { InputGroup,FormControl,Form } from 'react-bootstrap'
import './TagsList.scss'

export default function TagsList() {

    const [list, setList] = useState([])
    const [val, setVal] = useState('')

    const handlePressKey = (e)=>{
        let item = e.target.value
        let idItem = Date.now()
        let itemList = {
            id: idItem,
            item
        } 
        if(e.key === 'Enter'){
            setList(prevState => ([...prevState, itemList]))
            setVal('')
        }
    }

    const filterListTags =(e)=>{
        let id = Number(e.target.id)
        setList(list.filter(elem=>elem.id !== id))
    }

    const handlevalueInput =(e)=>{
        setVal(e.target.value)
    }

    

    const listTags = list.map((el, i) => {
        return (
            <span key={el.id} className='badge bg-secondary text-white p-1 mr-2'>

                {el.item}
                <span className=" square-icon">
                    <i onClick={(e) => filterListTags(e)} id={el.id} className="pl-2 bi bi-x-square "></i>
                </span>

            </span>
        )
    })
    
    return (
        <div className='text-dark d-flex '>
            <div className={`'w-75'`}>
                {listTags}
            </div>
            <div className="mb-3 ml-5">
                <InputGroup
                    onKeyPress={(e) => handlePressKey(e)}

                    className="mb-3 d-block">
                    <FormControl
                        className="w-auto"
                        onChange={(e) => handlevalueInput(e)}
                        value={val}
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                    <Form.Text className="text-muted">
                        Введите название тега и нажмите Enter
                    </Form.Text>
                </InputGroup>
            </div>

        </div>
    )
}
