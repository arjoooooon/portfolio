import React from 'react';
import { Container } from 'react-bootstrap';
import Icon from './Icon'

const Footer = () => {
    return (
        <footer className="arja-footer arja-section">
            <Container>
                <div className="row mb-5">
                    <div className="col-md">
                        <div className="arja-footer-widget mb-4">
                            <h2 className="arja-heading-2">Lets talk about</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <ul className="arja-footer-social list-unstyled float-md-left float-lft mt-5">
                                <li><a href="#"><Icon icon="twitter" size={26} /></a></li>
                                <li><a href="#"><Icon icon="facebook" size={26} /></a></li>
                                <li><a href="#"><Icon icon="instagram" size={26} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="arja-footer-widget mb-4 ml-md-4">
                            <h2 className="arja-heading-2">Links</h2>
                            <ul className="list-unstyled">
                                <li><a href="#"><Icon icon="arrow-right" className="mr-2" size={16} />Home</a></li>
                                <li><a href="#"><Icon icon="arrow-right" className="mr-2" size={16} />About</a></li>
                                <li><a href="#"><Icon icon="arrow-right" className="mr-2" size={16} />Services</a></li>
                                <li><a href="#"><Icon icon="arrow-right" className="mr-2" size={16} />Projects</a></li>
                                <li><a href="#"><Icon icon="arrow-right" className="mr-2" size={16} />Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="arja-footer-widget mb-4">
                            <h2 className="arja-heading-2">Services</h2>
                            <ul className="list-unstyled">
                                <li><a href="#"><Icon icon="arrow-right" className="mr-2" size={16} />Web Design</a></li>
                                <li><a href="#"><Icon icon="arrow-right" className="mr-2" size={16} />Web Development</a></li>
                                <li><a href="#"><Icon icon="arrow-right" className="mr-2" size={16} />Business Strategy</a></li>
                                <li><a href="#"><Icon icon="arrow-right" className="mr-2" size={16} />Data Analysis</a></li>
                                <li><a href="#"><Icon icon="arrow-right" className="mr-2" size={16} />Graphic Design</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="arja-footer-widget mb-4">
                            <h2 className="arja-heading-2">Have a Questions?</h2>
                            <div className="block-23 mb-3">
                                <ul>
                                    <li><Icon icon="location2" className="mr-2" size={16} /><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                                    <li><a href="#"><Icon icon="phone" className="mr-2" size={16} /><span className="text">+2 392 3929 210</span></a></li>
                                    <li><a href="#"><Icon icon="mail4" className="mr-2" size={16} /><span className="text">info@yourdomain.com</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>
                            Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true"></i> by <a href="#" target="_blank">Arjun Taneja</a>
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;