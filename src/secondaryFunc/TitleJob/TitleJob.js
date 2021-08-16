import React from 'react'
import { Image } from 'react-bootstrap'

export default function TitleJob({image,title,subtitle}) {
    return (
        <div className='d-flex justify-content-start align-items-center p-2 w-75'>
            <div className='title-job mr-5'>
                <Image src={image} roundedCircle className='title-job__img w-100' />
            </div>
            <div className='card-job__header '>
                <h4 className='text-muted'>{title}</h4>
                <h5 className='text-secondary'>{subtitle}</h5>
            </div>
        </div>
    )
}
