import React from 'react'
import { Container } from 'react-bootstrap'
import './Categories.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import BlockHeader from '../../../secondaryFunc/BlockHeader/BlockHeader';

export default function Categories() {
    return ( 
        <section className="categories mt-5 p-5 d-flex flex-column align-items-center bg-light">
            <Container>
            <BlockHeader title={'Popular Jobs'} description={"Here's the most popular categories"} />
           
            <div className="categories__grid">
                <div className="categories-block d-flex p-3 flex-column align-items-center" data-toggle="tooltip">
                    <img className="p-2" src='https://icon-library.com/images/it-icon-png/it-icon-png-6.jpg' alt='dfdf' />
                    <h4 className="categories-block__title p-1">Tehnology</h4>
                    <div className="categories-block__list-jobs">
                        Designer, Developer, IT Service, Front-end developer, Project management
                    </div>
                </div>
                <div className="categories-block d-flex p-3 flex-column align-items-center">
                    <img className="p-2" src='https://icon-library.com/images/it-icon-png/it-icon-png-6.jpg' alt='dfdf' />
                    <h4 className="categories-block__title p-1">Tehnology</h4>
                    <div className="categories-block__list-jobs">
                        Designer, Developer, IT Service, Front-end developer, Project management
                    </div>
                </div>
                <div className="categories-block d-flex p-3 flex-column align-items-center">
                    <img className="p-2" src='https://icon-library.com/images/it-icon-png/it-icon-png-6.jpg' alt='dfdf' />
                    <h4 className="categories-block__title p-1">Tehnology</h4>
                    <div className="categories-block__list-jobs">
                        Designer, Developer, IT Service, Front-end developer, Project management
                    </div>
                </div>
                <div className="categories-block d-flex p-3 flex-column align-items-center">
                    <img className="p-2" src='https://icon-library.com/images/it-icon-png/it-icon-png-6.jpg' alt='dfdf' />
                    <h4 className="categories-block__title p-1">Tehnology</h4>
                    <div className="categories-block__list-jobs">
                        Designer, Developer, IT Service, Front-end developer, Project management
                    </div>
                </div>
                <div className="categories-block d-flex p-3 flex-column align-items-center">
                    <img className="p-2" src='https://icon-library.com/images/it-icon-png/it-icon-png-6.jpg' alt='dfdf' />
                    <h4 className="categories-block__title p-1">Tehnology</h4>
                    <div className="categories-block__list-jobs">
                        Designer, Developer, IT Service, Front-end developer, Project management
                    </div>
                </div>
                <div className="categories-block d-flex p-3 flex-column align-items-center">
                    <img className="p-2" src='https://icon-library.com/images/it-icon-png/it-icon-png-6.jpg' alt='dfdf' />
                    <h4 className="categories-block__title p-1">Tehnology</h4>
                    <div className="categories-block__list-jobs">
                        Designer, Developer, IT Service, Front-end developer, Project management
                    </div>
                </div>
               
            </div>
            </Container>
        </section>
    )
}
