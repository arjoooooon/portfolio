import React from 'react';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet';
import styles from '../styles/projects.module.css';
import Project from '../components/Project';
import Footer from '../components/Footer';

import rob from '../assets/Images/rob.png';
import kanjitrainer from '../assets/kanjitrainer.png'
import homely from '../assets/homely.png';
import shootout from '../assets/shootout.png';
import simulatio from '../assets/simulatio.png';


const Projects  = () => {
    return (
        <div className={styles.container}>
            <Helmet>
                <meta name="description" content="A collection of fun programming projects and tools that I built" />
                <meta name="keywords" content="Kanji Trainer, ROB, Simulatio, Github, programming, technology, AI, AWS, Cloud" />
            </Helmet>
            <Navbar />
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Projects</h1>
                <Project className={styles.project} title="ROB | The Intelligent Bin" link="http://sgsmartbin.com"
                techs={['AI - powered (Tensorflow, Keras)', 
                'Cloud (Google Colab)']} uri={rob}>
                    A bin that uses computer vision and artificial intelligence to automatically segregate trash based on materials composition.
                </Project>

                <Project className={styles.project} title="Kanji Trainer" uri={kanjitrainer} link="" techs={[
                    'Mobile Application for iOS & Android (React native)',
                    'AI - powered (Tensorflow, Keras)',
                    'Database and API oriented (Amazon Web Services) '
                ]}>
                    An AI-powered IOS/Android application that allows users to learn how to write Japanese characters (Kanji). Users can use the App to draw characters using their finger, and the App gives real time feedback on the accuracy of their strokes
                </Project>

                <Project className={styles.project} title="Homely" uri={homely} link="https://stonks-d9988.firebaseapp.com/" techs={[
                    'Web application (React)',
                    'Database and Authentication (Firebase)',
                    'Geolocational data representation (Leaflet.js)'
                ]}>
                    A web application that connects customers with vendors. During the coronavirus, consumers often go out to shop only to realize that the item they desire is out of stock. This Application allows stores to list their products, so that consumers can easily find a particular item and go shopping for it in order to minimize the risk of infection.
                </Project>

                <Project className={styles.project} title="Simulatio" uri={simulatio} link="https://github.com/arjoooooon/javascript_experiments" techs={[
                    'JavaScript',
                    'p5.js'
                ]}>
                    A collection of interesting physics based simulations that I programmed. Teaches the user about interesting physics based phenomena in an interactive way.
                </Project>

                <Project className={styles.project} title="Shootout" uri={shootout} link="http://github.com/arjoooooon" techs={[
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