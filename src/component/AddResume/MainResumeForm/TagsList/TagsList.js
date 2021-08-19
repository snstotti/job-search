import React, { useState } from 'react'
import { InputGroup,FormControl } from 'react-bootstrap'

export default function TagsList() {

    const [list, setList] = useState([])
    const [val, setVal] = useState('')

    const handlePressKey = (e)=>{
        let item = e.target.value
        
        if(e.key === 'Enter'){
            setList(prevState => ([...prevState, item]))
            setVal('')
        }
    }

    const handlevalueInput =(e)=>{
        setVal(e.target.value)
    }

    const listTags = list.map((el,i)=>{
        return (
            <span key={i} className='badge bg-secondary text-white p-1 mr-2'>
                
                {el}
                <i class="pl-2 bi bi-x-square"></i>
            </span>
        )
    })

    return (
        <div className='text-dark d-flex '>
            <div className='w-75'>
                {listTags}
            </div>
            <div className="mb-3">
                <InputGroup 
                onKeyPress={(e)=>handlePressKey(e)}
                onChange={(e)=>handlevalueInput(e)}
                className="mb-3">
                <FormControl
                   
                    value={val}
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
        <span>Введите название тега и нажмите Enter</span>
            </div>
            
        </div>
    )
}
