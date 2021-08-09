import React from 'react'
import TitleComponent from '../../secondaryFunc/TitleComponent/TitleComponent.js'
import JobFilter from './JobFilter/JobFilter.js'
import "./JobList.scss"
import JobListItem from './JobListItem/JobListItem.js'

export default function JobList() {

    return (
        <div className="job-list">
            <TitleComponent
                title={'Browse jobs'}
                description={'Use following search box to find jobs that fits you better'}
                component={<JobFilter />}
             />
            <JobListItem />
        </div>
    )
}
