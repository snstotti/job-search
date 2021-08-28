import React from 'react'
import './BlockHeader.scss'

export default function BlockHeader({ title, description }) {
    return (
        <header className="categories__title text-center mb-5">
            <h2 className="mx-auto p-3">{title}</h2>
            <div className="categories__border mx-auto mb-3"></div>
            <p className="fs-5">{description}</p>
        </header>

    )
}
