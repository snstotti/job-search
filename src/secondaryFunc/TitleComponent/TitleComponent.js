import React from 'react'
import { Container } from 'react-bootstrap'
import './titleComponent.scss'

export default function TitleComponent({ title, description, component }) {
    return (
        <div className="title">
            <Container>
                <div className="title__block d-flex flex-column align-items-center">
                    <div className="text-center text-white mb-5 p-1 ">
                        <h2 className="title__title">{title}</h2>
                        <h5 className="titles__subtitle">{description}</h5>
                    </div>
                    <div className="mt-5 p-1 w-100">
                        {component}
                    </div>
                </div>
            </Container>
        </div>

    )
}
