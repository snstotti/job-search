import React from 'react'
import { Container } from 'react-bootstrap'
import googleIcon from '../../../img/google-icon.png'
import SocialLink from '../../../secondaryFunc/SocialLink/SocialLink'
import TitleJob from '../../../secondaryFunc/TitleJob/TitleJob'
import './JobDescription.scss'

export default function JobDescription() {
    return (
        <div className="detail p-3 ">
            <Container>

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
                <div>
                    <div>
                        <span>share on</span>
                        <SocialLink />
                    </div>
                </div>
            </Container>

        </div>
    )
}
