import React from 'react'

export default function ContentBlock({title,content}) {
    return (
        <div className=''>
        <h3>{title}</h3>
        <p>
            {content}
        </p>
    </div>
    )
}
