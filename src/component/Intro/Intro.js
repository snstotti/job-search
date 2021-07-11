import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import './intro.css'
import FormJobSearch from '../FormJobSearch/FormJobSearch';

export default function Intro() {

    return (
        <div className="intro">
            <Container>
                <div className="text-center text-white mb-5 p-1">
                    <h2 className="intro__title">Title</h2>
                    <h5 className="intro__subtitle">Description</h5>
                </div>
                <div className="mt-5 p-1">
                <FormJobSearch />
                </div>
                
            </Container>
        </div>

    )
}
