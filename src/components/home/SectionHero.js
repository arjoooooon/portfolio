import React from "react"
import { Carousel, Container } from "react-bootstrap"
import Icon from '../Icon'
import slide1 from "../../assets/images/bw.png"

const SectionHero = () => {
  return (
    <section id="home-section" className="hero">
      <Carousel loop={true} margin={10} fade={true} nav="true" controls={false} className="home-slider owl-theme">
        <Carousel.Item className="slider-item ">
          <div className="overlay"></div>
          <Container>
            <div
              className="row d-md-flex no-gutters slider-text align-items-end justify-content-end"
            >
              <div className="one-third order-md-last img" style={{background: `url(${slide1})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat'}}>
                <div className="overlay"></div>
              </div>
              <div className="one-forth d-flex  align-items-center">
                <div className="text hero-text">
                  <span className="subheading">Hello</span>
                  <h1 className="mb-4 mt-3">
                    I'm <span>Arjun</span>
                  </h1>
                  <h2 className="mb-4" style={{paddingBottom: 10, paddingTop: 10, paddingLeft: 10}}>A high school student at UWCSEA in Singapore. I am a curious person who loves to use technology to build things with the goal of helping people and solving problems.</h2>
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
