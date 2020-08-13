import React from "react"
import { Carousel } from "react-bootstrap"
import slide1 from "../../assets/images/bg_1.jpg"
import slide2 from "../../assets/images/bg_2.jpg"

const SectionHero = () => {
  return (
    <section id="home-section" className="hero">
      <Carousel loop margin={10} fade nav className="home-slider owl-theme">
        <Carousel.Item className="slider-item ">
          <div className="overlay"></div>
          <div className="container">
            <div
              className="row d-md-flex no-gutters slider-text align-items-end justify-content-end"
              data-scrollax-parent="true"
            >
              <div className="one-third order-md-last img">
                <img src={slide1} alt="" />
                <div className="overlay"></div>
              </div>
              <div className="one-forth d-flex  align-items-center">
                <a
                  href="https://vimeo.com/45830194"
                  className="icon-video popup-vimeo d-flex justify-content-center align-items-center"
                >
                  <span className="ion-ios-play play"></span>
                </a>
                <div className="text">
                  <span className="subheading">Hello</span>
                  <h1 className="mb-4 mt-3">
                    I'm <span>Niko Bochser</span>
                  </h1>
                  <h2 className="mb-4">A Freelance Web Developer</h2>
                  <p>
                    <a href="#" className="btn-custom">
                      Hire me
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="slider-item">
          <div className="overlay"></div>
          <div className="container">
            <div
              className="row d-flex no-gutters slider-text align-items-end justify-content-end"
              data-scrollax-parent="true"
            >
              <div className="one-third order-md-last img">
                <img src={slide2} alt="" />
                <div className="overlay"></div>
              </div>
              <div className="one-forth d-flex align-items-center">
                <a
                  href="https://vimeo.com/45830194"
                  className="icon-video popup-vimeo d-flex justify-content-center align-items-center"
                >
                  <span className="ion-ios-play play"></span>
                </a>
                <div className="text">
                  <h1 className="mb-4 mt-3">
                    I'm a <span>web designer</span> from Scotland
                  </h1>
                  <p>
                    <a href="#" className="btn-custom">
                      Hire me
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  )
}

export default SectionHero
