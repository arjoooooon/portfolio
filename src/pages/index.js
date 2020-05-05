import React from 'react';
import styles from '../styles/index.module.css';
import { Link } from 'gatsby'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import muguri from '../assets/mugshot.png'

// 115 115

const App = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.descriptionContainer}>
                <h1 className={styles.descriptionHeader}>Arjun Taneja</h1>
                <img src={muguri} alt='face' width={115} height={115} className={styles.descriptionImage}/>
                <span className={styles.descriptionText}>
                Hi there! I am Arjun, a high school student at UWCSEA. I like to build things, and I'm passionate about making the world
                a better place through technology<br /><br />

                Some of the things I have been up to recently include cofounding the <a href="http://www.sgsmartbin.com" target="_blank" className={styles.link}>Smartbin</a> – a
                sustainable recycling solution. We were so excited when the project got featured in
                the < a href = "https://www.blog.google/around-the-globe/google-asia/singapore-students-using-cloud-smarter-recycling/" target="_blank" className={styles.link} > Google Blog </a>! I am currently working on moving the project forward, and
                introducing it to the real world. I also enjoyed my internship with tech firm <a href="https://www.palo-it.com/" target="_blank" className={styles.link}>Palo IT</a> where I got the opportunity to work on a <a href="https://www.youtube.com/watch?v=KVHErOIxbqw" target="_blank" className={styles.link}>greenhouse management system</a>, a technology that allows automatic, AI-powered management of greenhouses in order
                to ultimately reduce greenhouse gas emissions. <br /><br />

                I enjoy <Link to='/experience' className={styles.link}>public speaking</Link>, writing, learning new languages and doing what I can to help people and the environment. As the
                leader of my computer science club, I teach a class of 20 + G9 - 12 students in programming fundamentals in Java. My love
                for languages inspired me to create a self learning app called the <a href="#" className={styles.link}>Kanji trainer</a>.<br/><br/>

                Thank you or reading and feel free to drop me a line at <a href='#' className={styles.link}>hi@arjuntaneja.com</a>
                </span>
            </div>
            <Footer />
        </div>
    );
}

export default App;
