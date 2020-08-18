import React from "react"
import { Carousel, Container } from "react-bootstrap"
import Icon from '../Icon'
import slide1 from "../../assets/images/bg_1.jpg"
import slide2 from "../../assets/images/bg_2.jpg"

const SectionHero = () => {
  return (
    <section id="home-section" className="hero">
      <Carousel loop={true} margin={10} fade={true} nav={true} controls={false} className="home-slider owl-theme">
        <Carousel.Item className="slider-item ">
          <div className="overlay"></div>
          <Container>
            <div
              className="row d-md-flex no-gutters slider-text align-items-end justify-content-end"
            >
              <div className="one-third order-md-last img" style={{background: `url(${slide1})`}}>
                <div className="overlay"></div>
              </div>
              <div className="one-forth d-flex  align-items-center">
                <a
                  href="https://vimeo.com/45830194"
                  className="icon-video popup-vimeo d-flex justify-content-center align-items-center"
                >
                  <Icon icon="play3" className="play" size={26} />
                </a>
                <div className="text">
                  <span className="subheading">Hello</span>
                  <h1 className="mb-4 mt-3">
                    I'm <span>Arjun</span>
                  </h1>
                  <h2 className="mb-4">A high school student at UWCSEA in Singapore. I am a curious person who loves to use technology to build things with the goal of helping people and solving problems.</h2>
                  <p>
                    <a href="#" className="btn-custom">
                      Hire me
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Carousel.Item>
        <Carousel.Item className="slider-item">
          <div className="overlay"></div>
          <Container>
            <div
              className="row d-flex no-gutters slider-text align-items-end justify-content-end"
            >
              <div className="one-third order-md-last img" style={{background: `url(${slide2})`}}>
                <div className="overlay"></div>
              </div>
              <div className="one-forth d-flex align-items-center">
                <a
                  href="https://vimeo.com/45830194"
                  className="icon-video popup-vimeo d-flex justify-content-center align-items-center"
                >
                  <Icon icon="play3" className="play" size={26} />
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
          </Container>
        </Carousel.Item>
      </Carousel>
    </section>
  )
}

export default SectionHero
