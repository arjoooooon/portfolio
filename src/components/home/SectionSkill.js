import React from "react"
import { ProgressBar } from "react-bootstrap"

const SectionSkill = () => {
  return (
    <section className="ftco-section bg-light" id="skills-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div
            data-aos="fade-up"
            className="col-md-12 heading-section text-center"
          >
            <span className="subheading">Skills</span>
            <h2 className="mb-4">My Skills</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
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
              <h3>Photoshop</h3>
              <ProgressBar now={75} label="75%" />
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="progress-wrap"
            >
              <h3>jQuery</h3>
              <ProgressBar now={60} label="60%" />
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="progress-wrap"
            >
              <h3>HTML5</h3>
              <ProgressBar now={85} label="85%" />
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div
              data-aos="fade-up"
              data-aos-delay="800"
              className="progress-wrap"
            >
              <h3>CSS3</h3>
              <ProgressBar now={90} label="90%" />
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div
              data-aos="fade-up"
              data-aos-delay="1000"
              className="progress-wrap"
            >
              <h3>WordPress</h3>
              <ProgressBar now={70} label="70%" />
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div
              data-aos="fade-up"
              data-aos-delay="1200"
              className="progress-wrap"
            >
              <h3>SEO</h3>
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
            <h2 className="mb-4">Strategy, design and a bit of magic</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
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
                  <a href="#">Explore</a>
                </h3>
                <h4>Design Sprints</h4>
                <h4>Product Strategy</h4>
                <h4>UX Strategy</h4>
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
                  <a href="#">Create</a>
                </h3>
                <h4>Information</h4>
                <h4>UX/UI Design</h4>
                <h4>Branding</h4>
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
                  <a href="#">Learn</a>
                </h3>
                <h4>Prototyping</h4>
                <h4>User Testing</h4>
                <h4>UI Testing</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionSkill
