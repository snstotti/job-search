import React from 'react'
import { Container } from 'react-bootstrap'
import './Categories.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Categories() {
    return ( 
        <section className="categories mt-5 p-5 d-flex flex-column align-items-center bg-light">
            <Container>
            <header className="categories__title text-center mb-5">
                <h2 className="mx-auto p-3">Popular Jobs</h2>
                <div className="categories__border mx-auto mb-3"></div>
                <p className="fs-5">Here's the most popular categories</p>
            </header>
            <div className="categories__grid">
                <div className="categories-block">
                    <img src='https://icon-library.com/images/it-icon-png/it-icon-png-6.jpg' alt='dfdf' />
                    <h4 className="categories-block__title">Tehnology</h4>
                    <div className="categories-block__list-jobs">
                        Designer, Developer, IT Service, Front-end developer, Project management
                    </div>
                </div>
                <div className="categories-block">
                    <img src='#' alt='dfdf' />
                    <h4 className="categories-block__title">Tehnology</h4>
                    <div className="categories-block__list-jobs">
                        Designer, Developer, IT Service, Front-end developer, Project management
                    </div>
                </div>
                <div className="categories-block">
                    <img src='#' alt='dfdf' />
                    <h4 className="categories-block__title">Tehnology</h4>
                    <div className="categories-block__list-jobs">
                        Designer, Developer, IT Service, Front-end developer, Project management
                    </div>
                </div>
                <div className="categories-block">
                    <img src='#' alt='dfdf' />
                    <h4 className="categories-block__title">Tehnology</h4>
                    <div className="categories-block__list-jobs">
                        Designer, Developer, IT Service, Front-end developer, Project management
                    </div>
                </div>
                <div className="categories-block">
                    <img src='#' alt='dfdf' />
                    <h4 className="categories-block__title">Tehnology</h4>
                    <div className="categories-block__list-jobs">
                        Designer, Developer, IT Service, Front-end developer, Project management
                    </div>
                </div>
                <div className="categories-block">
                    <img src='#' alt='dfdf' />
                    <h4 className="categories-block__title">Tehnology</h4>
                    <div className="categories-block__list-jobs">
                        Designer, Developer, IT Service, Front-end developer, Project management
                    </div>
                </div>
            </div>
            </Container>
        </section>
    )
}
