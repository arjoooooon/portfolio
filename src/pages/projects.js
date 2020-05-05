import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/projects.module.css';
import Project from '../components/Project';
import Footer from '../components/Footer';

import smartbin from '../assets/smartbin.png';
import kanjitrainer from '../assets/kanjitrainer.png'
import homely from '../assets/homely.png';
import shootout from '../assets/shootout.png';
import simulatio from '../assets/simulatio.png';


const Projects  = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Projects</h1>
                <Project title="SmartBin" link="http://sgsmartbin.com"
                techs={['Mobile Application for iOS & Android (React native)', 'AI - powered (Tensorflow, Keras)', 
                'Database and API oriented (Amazon Web Services) ']} uri={smartbin}>
                    An AI-powered IOS/Android application that allows users to learn how to write Japanese characters (Kanji). 
                    Users can use the App to draw characters using their finger, and the App gives real time feedback on the accuracy 
                    of their strokes.
                </Project>

                <Project title="Kanji Trainer" uri={kanjitrainer} link="sgsmartbin.com" techs={[
                    'Mobile Application for iOS & Android (React native)',
                    'AI - powered (Tensorflow, Keras)',
                    'Database and API oriented (Amazon Web Services) '
                ]}>
                    An AI-powered IOS/Android application that allows users to learn how to write Japanese characters (Kanji). Users can use the App to draw characters using their finger, and the App gives real time feedback on the accuracy of their strokes
                </Project>

                <Project title="Homely" uri={homely} link="http://homely.com" techs={[
                    'Web application (React)',
                    'Database and Authentication (Firebase)',
                    'Geolocational data representation (Leaflet.js)'
                ]}>
                    A web application that connects customers with vendors. During the coronavirus, consumers often go out to shop only to realize that the item they desire is out of stock. This Application allows stores to list their products, so that consumers can easily find a particular item and go shopping for it in order to minimize the risk of infection.
                </Project>

                <Project title="Simulatio" uri={simulatio} link="https://github.com/arjoooooon" techs={[
                    'JavaScript',
                    'p5.js'
                ]}>
                    A collection of interesting physics based simulations that I programmed. Teaches the user about interesting physics based phenomena in an interactive way.
                </Project>

                <Project title="Shootout" uri={shootout} link="http://github.com/arjoooooon" techs={[
                    'Lua',
                    'Love2D'
                ]}>
                    A video game that I programmed during my summer course at Stanford University. It is a top down shooter that implements a lot of  projectile mechanics and physics.
                </Project>
                               
            </div>

            <Footer />
        </div>
    );
}

export default Projects;