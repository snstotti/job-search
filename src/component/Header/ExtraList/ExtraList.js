import React from 'react'
import './ExtraList.css'

export default function ExtraList({title}) {

    return (
        <div className='extraListTitle'>
            <p >{title}</p>
            {/* <ul className={`extraList p-2 position-absolute text-black-50 text-hover`}>
                <li>Version 1</li>
                <li>Version 2</li>
                <li>Version 3</li>
            </ul> */}
        </div>
    )
}
