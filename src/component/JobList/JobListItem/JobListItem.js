import React from 'react'
import { Container,Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
// import Image from '../../../img/google-icon.png'



export default function JobListItem() {
    return (
        <div className='row'>
            <Container>
            <h5 className='col-xs-12'>We found 357 matches, you're watching 10 to 20</h5>
            <div className='col-xs-12'>
                    <Col xs={6} md={4}>
                        <Image src='../../../img/google-icon.png' roundedCircle />
                    </Col>
                </div>
            </Container>
        </div>
    )
}
