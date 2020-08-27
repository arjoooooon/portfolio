import React from "react"
import { Carousel, Container } from "react-bootstrap"
import Icon from '../Icon'
import slide1 from "../../assets/images/resized2.jpg"
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
                <div className="text">
                  <span className="subheading">Hello</span>
                  <h1 className="mb-4 mt-3">
                    I'm <span>Arjun</span>
                  </h1>
                  <h2 className="mb-4" style={{backgroundColor: 'white', paddingBottom: 10, paddingTop: 10}}>A high school student at UWCSEA in Singapore. I am a curious person who loves to use technology to build things with the goal of helping people and solving problems.</h2>
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
                <div className="text">
                  <h1 className="mb-4 mt-3">
                    I'm a <span>High School Student</span> in Singapore
                  </h1>
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
