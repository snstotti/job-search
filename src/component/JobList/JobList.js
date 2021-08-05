import React from 'react'
import { Container } from 'react-bootstrap'
import TitleComponent from '../../secondaryFunc/TitleComponent/TitleComponent.js'
import FormJobSearch from '../HomeContainer/FormJobSearch/FormJobSearch.js'
import JobFilter from './JobFilter/JobFilter.js'
import "./JobList.scss"

export default function JobList() {
    return (
        <div className="job-list">
            <TitleComponent
                title={'Browse jobs'}
                description={'Use following search box to find jobs that fits you better'}
                component={<JobFilter />} />
        </div>
    )
}
