import React from 'react';
import { Container } from 'react-bootstrap';
import BlogImage from '../../assets/Images/GoogleBlogImage.png';
import styles from '../../styles/mention.module.css';

const SectionMention = () => {
    return (
        <section className="arja-section arja-project">
            <Container>
                <div className="row justify-content-center pb-5">
                    <div data-aos='fade-up' className="col-md-12 heading-section text-center">
                        <span className="subheading">Mentions</span>
                        <h2 className="mb-4">Media Coverage</h2>
                    </div>
                </div>
                
                <a href="https://blog.google/around-the-globe/google-asia/singapore-students-using-cloud-smarter-recycling/" target="_blank" rel="noopener noreferrer">
                <div className={styles.mentionWrapper}>
                    <img src={BlogImage} />
                    <p className={styles.mentionDate}>OCTOBER 24, 2019</p>
                    <p className={styles.mentionParagraph}>Coming up with big ideas in technology used to take the kind of time and money that only large companies had.  Now open source tools—like TensorFlow, which provides access to Google’s machine learning technology—mean anyone with a smart concept has the opportunity to make it a reality. Just ask Arjun Taneja and Vayun Mathur, two friends and high school students from Singapore with a big ambition to improve recycling rates...</p>
                </div>
                </a>
            </Container>
        </section>
    );
}

export default SectionMention;