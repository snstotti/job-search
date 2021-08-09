import React from 'react'
import { Form, Button } from 'react-bootstrap'
import FormGroup from './FormGroup/FormGroup';
import './JobFilter.scss'

export default function JobFilter() {

    const checkboxContract = ['All types', 'Full-time', 'Part-time', 'Internship', 'Freelance']
    const checkboxRate = ['All rates', '0$-50$', '50$-100$', '100$-200$', '200$-250$']
    const checkboxAcademicDegree = ['All degrees', 'Associate degree ', "Bachelor's degree", "Master's degree", 'Doctoral degree']

    return (
        <div className="job-filter">

            <Form className="mb-3 flex-column w-100">
                <div className="mb-3 d-flex justify-content-around w-100">
                    <FormGroup
                        placeholder='Skils'
                        listCheckbox={checkboxContract} />

                    <FormGroup
                        placeholder='Location'
                        listCheckbox={checkboxRate} />

                    <FormGroup
                        placeholder=''
                        listCheckbox={checkboxAcademicDegree}
                        type='select' />


                </div>
                <div className="d-flex justify-content-end ">
                    <Button 
                    className="mr-5 mb-3" 
                    variant="primary" 
                    type="submit"
                    onClick={(e)=>e.preventDefault()}>
                        Apply
                    </Button>

                </div>
            </Form>
        </div>
    )
}