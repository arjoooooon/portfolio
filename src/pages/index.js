import React from 'react';
import { Helmet } from 'react-helmet';
import styles from '../styles/index.module.css';
import { Link } from 'gatsby'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import muguri from '../assets/mugshot.png'
import '../assets/Fonts/proxima_nova.ttf'
import '../styles/index.css'

// 115 115

const App = () => {
    return (
        <div className={styles.container}>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Hi! I'm Arjun Taneja, and this is my personal portfolio. 
                Learn more about projects such as my Smart Bin and Kanji Trainer here!" />
                <title>Arjun Taneja: tech innovator, speaker, learner</title>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-3BSFLBTLG1"></script>
                <script src="../scripts/gtag.js"></script>
                <meta name="keywords" content="Technology, Speaker, Leader, Student, Learner, Kanji Trainer, Portfolio, Google Blog" />
            </Helmet>

            <Navbar />
            <div className={styles.descriptionContainer}>
                <h1 className={styles.descriptionHeader}>Arjun Taneja</h1>
                <img src={muguri} alt='face' width={115} height={115} className={styles.descriptionImage}/>
                <div className={styles.descriptionText}>
                    Hi there! Thank you for visiting my site. I am Arjun, a high school student at UWCSEA in Singapore. I am a curious 
                    person and I like to build things using new technology that may ultimately help people.<br/><br/>

                    Some of the things I have been up to recently include co-founding the <a href="http://www.sgsmartbin.com" target="_blank" rel="noopener noreferrer"
                    className={styles.link}>Smartbin</a> – a sustainable recycling solution. 
                    We were so excited when the project got featured in the <a 
                    href = "https://www.blog.google/around-the-globe/google-asia/singapore-students-using-cloud-smarter-recycling/"
                    target="_blank" className={styles.link} rel="noopener noreferrer">Google Blog</a>! I am currently working on moving the project 
                    forward, and introducing it to the real world.<br/><br/>

                    I loved my time working with the amazing folks at the innovation lab at <a href="https://www.palo-it.com/"
                    target="_blank" className={styles.link} rel="noopener noreferrer">Palo IT</a>, where I did my internship. I got 
                    the opportunity to work on a live <a href="https://www.youtube.com/watch?v=KVHErOIxbqw" target="_blank"
                    className={styles.link} rel="noopener noreferrer">greenhouse management system</a> in Cambodia. We built a technology to use AI to manage 
                    a large number of greenhouses automatically. We think this could help reduce greenhouse gas emissions and be used
                    for farming in remote areas and who knows - even on another planet?<br/><br/>

                    I enjoy public speaking, <Link to="/blog" className={styles.link}>writing</Link>, learning new languages and doing what I can to help people and the environment. As 
                    the leader of my computer science club, I teach a class of 20+ G9-12 students in programming fundamentals in Java. My 
                    love for languages (Hindi, Spanish and Japanese so far) inspired me to create a self learning app called the <Link 
                    to="/experiences" className={styles.link}>Kanji Trainer</Link>.<br/><br/>

                    Thank you or reading and feel free to drop me a line at <a href="mailto:hello@arjuntaneja.com" target="_blank" 
                    className={styles.link}>hello@arjuntaneja.com</a>.
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
