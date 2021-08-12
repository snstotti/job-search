import React from 'react'
import { Container, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'
import googleIcon from '../../../img/google-icon.png'
import TitleJob from '../../../secondaryFunc/TitleJob/TitleJob'
import './CardJob.scss'



export default function CardJob() {

    return (
        <div className='row card-job justify-content-center'>
            <Link to="/job-detail">
            
                <div className='card-job__block '>
                    <div className='d-flex justify-content-between align-items-center'>
                        <TitleJob
                            image={googleIcon}
                            title={'Senior front-end developer'}
                            subtitle={'Google'} />

                        <div className='card-job__meta m-2 text-right'>
                            <span className='card-job__meta_location d-block mb-2 text-muted'>Menlo parc, CA</span>
                            <span className='card-job__meta_contract d-block bg-primary text-white d-inline-flex'>full-time</span>
                        </div>

                    </div>
                </div>
                </Link>
           
        </div>
    )
}
