import React from 'react';
import { Helmet } from 'react-helmet';
import styles from '../styles/contact.module.css';
import instagram from '../assets/SVG/instagram.svg';
import linkedin from '../assets/SVG/linkedin.svg';
import twitter from '../assets/SVG/twitter.svg';
import github from '../assets/SVG/github.svg';
import email from '../assets/SVG/email.svg';
import Layout from '../components/layout';
import { Container } from 'react-bootstrap';

const Contact = () => {

    return (
        <Layout className={styles.container}>
            <Helmet>
                <title>Arjun Taneja: Tech Innovator, Speaker, Learner</title>
                <meta name="description" content="Feel free to get in touch! I'm open to talking about cool, new ideas––or to just have an interesting conversation." />
                <meta name="keywords" content="contact, instagram, linkedin, email, twitter, github" />
            </Helmet>
            <Container className={styles.contactContainer}>
                <a href="mailto:hello@arjuntaneja.com" target="_blank" className={styles.mailLink}>hello@arjuntaneja.com</a>
                <div className={styles.iconContainer}>
                    <a href="https://www.linkedin.com/in/arjun-taneja-801012a2/" target="_blank" className={styles.iconLink}>
                        <img src={linkedin} className={styles.icon} alt="linkedin" />
                    </a>
                    <a href="https://github.com/arjoooooon" target="_blank" className={styles.iconLink}>
                        <img src={github} className={styles.icon} alt="github" />
                    </a>
                    <a href="https://www.instagram.com/arjoooooon/" target="_blank" className={styles.iconLink}>
                        <img src={instagram} className={styles.icon} alt="instagram" />
                    </a>
                    <a href="https://twitter.com/badpotatoman" target="_blank" className={styles.iconLink}>
                        <img src={twitter} className={styles.icon} alt="twitter" />
                    </a>
                    <a href="mailto:hello@arjuntaneja.com" target="_blank" className={styles.iconLink}>
                        <img src={email} className={styles.icon} alt="email" />
                    </a>
                </div>

            </Container>
        </Layout>
    );
}

export default Contact;