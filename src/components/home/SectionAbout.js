import React from "react"
import pic1 from "../../assets/images/about-1.jpg"
import { Container } from "react-bootstrap"

const SectionAbout = () => {
    return (
        <section className="arja-about arja-counter img arja-section" id="about-section">
            <Container>
                <div className="row d-flex">
                    <div className="col-md-6 col-lg-5 d-flex">
                        <div className="img-about img d-flex align-items-stretch">
                            <div className="overlay"></div>
                            <div className="img d-flex align-self-stretch align-items-center">
                                <img src={pic1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-7 pl-lg-5 py-5">
                        <div className="row justify-content-start pb-3">
                            <div data-aos='fade-up' className="col-md-12 heading-section">
                                <span className="subheading">Welcome</span>
                                <h2 className="mb-4">About Me</h2>
                                <p>One of the projects which has kept me really busy last year is my tech innovation solution on recycling. Me and a friend co-founded ROB - an AI powered recycling solution, in our home lab. We showcased this at various events including the <a href="https://makerfaire.com/featured-faires/" target="_blank" rel="noopener noreferrer">Maker Faire</a> and the <a href="/experiences">Google Developer Festival</a>. We were so excited when Google featured our innovation project on their <a href="https://www.blog.google/around-the-globe/google-asia/singapore-students-using-cloud-smarter-recycling/" target="_blank" rel="noopener noreferrer">blog</a>! This year I am dedicating time to make this project mainstream. Do watch this space for updates.</p>
                                <p>I loved my time working with the amazing folks at the innovation lab at <a href="https://www.palo-it.com/" target="_blank" rel="noopener noreferrer">Palo IT</a>, where I did my internship. I got the opportunity to work on a live <a href="https://www.youtube.com/watch?v=KVHErOIxbqw" target="_blank" rel="noopener noreferrer">greenhouse management system</a> in Cambodia. We built a technology that used AI to manage a large number of greenhouses automatically with the goal of reducing greenhouse gas emissions.</p>
                                <p>I enjoy <a href="/experiences">public speaking</a>, <a href="/blog">writing</a>,<a href="/experiences"> learning new languages</a> and <a href="/experiences">mentoring</a> in my areas of expertise. As the leader of my computer science club, I teach a class of 20+ G9-12 students in programming fundamentals in Java. My love for languages (Hindi, Spanish and Japanese so far) inspired me to create a self learning app called the <a href="/experiences">Kanji Trainer</a></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div data-aos='fade-up' data-aos-delay="200" className="media block-6 services d-block">
                                    <div className="icon"><span className="flaticon-analysis"></span></div>
                                    <div className="media-body">
                                        <h3 className="heading mb-3">Web Design</h3>
                                        <p>A small river named Duden flows by their place and supplies.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div data-aos='fade-up' data-aos-delay="400" className="media block-6 services d-block arja-animate">
                                    <div className="icon"><span className="flaticon-analysis"></span></div>
                                    <div className="media-body">
                                        <h3 className="heading mb-3">Web Application</h3>
                                        <p>A small river named Duden flows by their place and supplies.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default SectionAbout