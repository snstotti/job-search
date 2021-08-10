import React from 'react'
import { Container,Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import googleIcon from '../../../img/google-icon.png'
import './CardJob.scss'



export default function CardJob() {

    return (
        <div className='row card-job '>
            <Container>
                {/* <h5 className='col-xs-12'>We found 357 matches, you're watching 10 to 20</h5> */}
                <div className='card-job__block '>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex justify-content-start align-items-center'>
                            <div className='title-job mr-5'>
                                <Image src={googleIcon} roundedCircle className='title-job__img w-100' />
                            </div>
                            <div className='card-job__header '>
                                <h4 className=''>Senior front-end developer</h4>
                                <h5 className='text-secondary'>Google</h5>
                            </div>
                        </div>

                        <div className='card-job__meta m-2 text-right'>
                            <span className='card-job__meta_location d-block mb-2 text-muted'>Menlo parc, CA</span>
                            <span className='card-job__meta_contract d-block bg-primary text-white d-inline-flex'>full-time</span>
                        </div>

                    </div>
                </div>

            </Container>
        </div>
    )
}
