import React from 'react'
import { Container } from 'react-bootstrap'
import PageNumbering from '../../secondaryFunc/Pagination/Pagination.js'
import TitleComponent from '../../secondaryFunc/TitleComponent/TitleComponent.js'
import JobFilter from './JobFilter/JobFilter.js'
import "./JobList.scss"
import CardJob from './CardJob/CardJob.js'

export default function JobList() {

    return (
        <div className="job-list mb-5">
            <TitleComponent
                title={'Browse jobs'}
                description={'Use following search box to find jobs that fits you better'}
                component={<JobFilter />}
             />
             <div>
             <Container>
             <h5 className="mb-5">We found 357 matches, you're watching 10 to 20</h5>
            <CardJob />
            <CardJob />
            <CardJob />
            <PageNumbering />
             </Container>
             </div>
            
           
        </div>
    )
}
