import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import googleIcon from '../../../img/google-icon.png'
import TitleJob from '../../../secondaryFunc/TitleJob/TitleJob'
import './CardJob.scss'



export default function CardJob() {
    const [state, setstate] = useState(false)
    const colorStar = state ? 'text-warning' : 'text-secondary'
    return (
        <div className='row card-job justify-content-center'>


            <div className='card-job__block '>

                <div className='d-flex justify-content-between align-items-center '>
                    <Link to="/job-detail">
                        <TitleJob
                            image={googleIcon}
                            title={'Senior front-end developer'}
                            subtitle={'Google'} />
                    </Link>
                    <div className='card-job__meta m-2 text-right w-25'>
                        <span className='card-job__meta_location d-block mb-2 text-muted'>Menlo parc, CA</span>
                        <span className='card-job__meta_contract d-block bg-primary text-white d-inline-flex'>full-time</span>
                    </div>

                    <div role="button" className={`p-3  ${colorStar}`}
                        onClick={() => setstate(!state)}>
                        <i className="bi bi-star-fill"></i>
                    </div>
                </div>

            </div>


        </div>
    )
}
