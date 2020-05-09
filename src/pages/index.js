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
                    Hi there! Thank you for visiting my site. I am Arjun, a high school student at UWCSEA in Singapore. I am a curious 
                    person and I like to build things using new technology that may ultimately help people.<br/><br/>

                    Some of the things I have been up to recently include co-founding the Smartbin – a sustainable recycling solution. 
                    We were so excited when the project got featured in the Google Blog! I am currently working on moving the project 
                    forward, and introducing it to the real world.<br/><br/>

                    I loved my time working with the amazing folks at the innovation lab at Palo IT, where I did my internship. I got 
                    the opportunity to work on a live greenhouse management system in Cambodia. We built a technology to use AI to manage 
                    a large number of greenhouses automatically. We think this could help reduce greenhouse gas emissions and be used
                    for farming in remote areas and who knows - even on another planet?<br/><br/>

                    I enjoy public speaking, writing, learning new languages and doing what I can to help people and the environment. As 
                    the leader of my computer science club, I teach a class of 20 + G9-12 students in programming fundamentals in Java. My 
                    love for languages(Hindi, Spanish and Japanese so far) inspired me to create a self learning app called the Kanji 
                    trainer.<br/><br/>

                    Thank you or reading and feel free to drop me a line at hi @arjuntaneja.com
                </span>
            </div>
            <Footer />
        </div>
    );
}

export default App;
