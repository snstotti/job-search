import React from 'react'
import './SocialLink.scss'

export default function SocialLink() {
    return (
        <div className="d-flex col-md-3 col-sm-6 col-xs-12">
            <ul className="d-flex justify-content-around social-link align-items-center mb-0">
                <li><a href="/"><i className="bi bi-facebook"></i></a></li>
                <li><a href="/"><i className="bi bi-instagram"></i></a></li>
                <li><a href="/"><i className="bi bi-telegram"></i></a></li>
                <li><a href="/"><i className="bi bi-linkedin"></i></a></li>
                <li><a href="/"><i className="bi bi-twitter"></i></a></li>
            </ul>
        </div>
    )
}
