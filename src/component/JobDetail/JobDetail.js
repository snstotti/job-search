import React from 'react'
import TitleComponent from '../../secondaryFunc/TitleComponent/TitleComponent'
import JobDescription from './JobDescription/JobDescription'

export default function JobDetail() {
    return (
        <div className="job-detail">
            <TitleComponent
                // title={'Browse jobs'}
                // description={'Use following search box to find jobs that fits you better'}
                component={<JobDescription />}
             />
        </div>
    )
}
