import React from 'react'
import { Container } from 'react-bootstrap'
import './Footer.scss'

export default function Footer() {
    return (
        <footer className="footer">
            <Container>
                <div className="row footer__site">
                    <div className="col-sm-12 col-md-6">
                        <h6>ABOUT</h6>
                        <p className="text-justify ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <h6>COMPANY</h6>
                        <ul>
                            <li>as</li>
                            <li>as</li>
                            <li>asss</li>
                            <li>ffxcx</li>
                            <li>xxcxc</li>
                            <li>xcxc</li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <h6>TRENDEING JOBS</h6>
                        <ul>
                            <li>as</li>
                            <li>as</li>
                            <li>asss</li>
                            <li>ffxcx</li>
                            <li>xxcxc</li>
                            <li>xcxc</li>
                        </ul>
                    </div>
                </div>
                <hr />
            </Container>
            <Container>
                <div className="row">
                    <div className="col-md-9 col-sm-6 col-xs-12">

                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <ul className="d-flex justify-content-around social-list">
                           <li><a href="#" className=""><i className="bi bi-facebook"></i></a></li>
                           <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                           <li><a href="#"><i className="bi bi-telegram"></i></a></li>
                           <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                           <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                        </ul>
                    </div>
                </div>

            </Container>
        </footer>
    )
}
