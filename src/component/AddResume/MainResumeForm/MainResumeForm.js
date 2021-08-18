import React from 'react'
import { Col, Row } from 'react-bootstrap'
import AddLogo from '../../../secondaryFunc/AddLogo/AddLogo'
import BasicInfo from './BasicInfo/BasicInfo'
import IntroInfo from './IntroInfo/IntroInfo'

export default function MainResumeForm() {
    return (
        <Row className='w-100 bg-light p-3'>
            <Col xs={4}>
                <AddLogo />
            </Col>
            <Col xs={8}>
                <IntroInfo />
                <hr className="text-black mt-5" />
            </Col>

            <h4 className="text-muted text-center">Основная информация</h4>
            <Row className="w-75 bg-light p-3 justify-content-end" style={{margin:' 0 0 0 auto'}}>
               
                    <BasicInfo />
                
            </Row>
        </Row>
    )
}
