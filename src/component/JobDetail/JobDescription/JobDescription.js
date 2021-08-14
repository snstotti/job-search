import Button from 'react-bootstrap/Button'
import React from 'react'
import googleIcon from '../../../img/google-icon.png'
import SocialLink from '../../../secondaryFunc/SocialLink/SocialLink'
import TitleJob from '../../../secondaryFunc/TitleJob/TitleJob'
import './JobDescription.scss'
import ListPerspectives from './ListPerspectives/ListPerspectives'

export default function JobDescription() {
    
    return (
        <div className="detail  text-secondary">

            <div className="p-3  text-secondary">
                <div className="d-flex justify-content-between align-items-center">
                    <TitleJob
                        image={googleIcon}
                        title={'Senior front-end developer'}
                        subtitle={'Google'} />
                    <span className="text-secondary">2 days ago</span>
                </div>
                <hr className="text-secondary m-1 mb-3" />
                <p className="p-2  text-secondary">
                    You will help Google build next-generation web applications like Gmail, Google Docs, Google Analytics, and the Google eBookstore and eBook readers. As a Front End Engineer at Google, you will specialize in building responsive and elegant web UIs with AJAX and similar technologies. You may design or work on frameworks for building scalable frontend applications. We are looking for engineers who are passionate about and have experience building leading-edge user experience, including dynamic consumer experiences.
                </p>
                <ListPerspectives />
            </div>


            <div className="detail__footer d-flex justify-content-between align-items-center">
                <div className="detail__share d-flex align-items-center">
                    <span className="mr-3 ml-3 fw-bold">share on</span>
                    <SocialLink />
                </div>

                <div>
                    <Button className="mr-3" variant="primary">Apply now</Button>
                </div>
            </div>



        </div>
    )
}
