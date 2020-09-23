import React from "react"
import { ProgressBar } from "react-bootstrap"

const SectionSkill = () => {
  return (
    <section className="arja-section bg-light" id="skills-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div
            data-aos="fade-up"
            className="col-md-12 heading-section text-center"
          >
            <span className="subheading">Skills</span>
            <h2 className="mb-4">My Skills</h2>
            <p>
                What I've learned over my Programming journey
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 animate-box">
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="progress-wrap"
            >
              <h3>Python 3</h3>
              <ProgressBar now={75} label="75%" />
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="progress-wrap"
            >
              <h3>Tensorflow</h3>
              <ProgressBar now={60} label="60%" />
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="progress-wrap"
            >
              <h3>Javascript</h3>
              <ProgressBar now={80} label="85%" />
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div
              data-aos="fade-up"
              data-aos-delay="800"
              className="progress-wrap"
            >
              <h3>C/C++</h3>
              <ProgressBar now={90} label="90%" />
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div
              data-aos="fade-up"
              data-aos-delay="1000"
              className="progress-wrap"
            >
              <h3>Java</h3>
              <ProgressBar now={70} label="70%" />
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div
              data-aos="fade-up"
              data-aos-delay="1200"
              className="progress-wrap"
            >
              <h3>UNIX/Shell</h3>
              <ProgressBar now={80} label="80%" />
            </div>
          </div>
        </div>
        <div className="row justify-content-center py-5 mt-5">
          <div
            data-aos="fade-up"
            data-aos-delay="1400"
            className="col-md-12 heading-section text-center"
          >
            <span className="subheading">What I Do</span>
            <h2 className="mb-4">Programming experience</h2>
          </div>
        </div>
        <div className="row">
          <div
            data-aos="fade-up"
            data-aos-delay="1600"
            className="col-md-4 text-center d-flex"
          >
            <div className="services-1">
              <span className="icon">
                <i className="flaticon-analysis"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">
                  <a href="#">Web Development</a>
                </h3>
                <h4>HTML5</h4>
                <h4>JavaScript</h4>
                <h4>React</h4>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="1800"
            className="col-md-4 text-center d-flex"
          >
            <div className="services-1">
              <span className="icon">
                <i className="flaticon-flasks"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">
                  <a href="#">Game Development</a>
                </h3>
                <h4>Java</h4>
                <h4>Lua/Love2D</h4>
                <h4>C/SDL</h4>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="2000"
            className="col-md-4 text-center d-flex"
          >
            <div className="services-1">
              <span className="icon">
                <i className="flaticon-ideas"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">
                  <a href="#">Computing</a>
                </h3>
                <h4>C/C++ Algorithms</h4>
                <h4>MATLAB Data Visulization</h4>
                <h4>Tensorflow</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionSkill
