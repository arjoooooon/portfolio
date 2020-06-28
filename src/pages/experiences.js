import React,{ useState} from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import styles from '../styles/experiences.module.css';
import Experience from '../components/Experience';
import Footer from '../components/Footer.js';

//-------------------IMAGE IMPORTS----------------------------
import devfest from '../assets/devfest.png';
import blank from '../assets/blank.png';
import smartbindiagram from '../assets/smartbindiagram.png';
import agritech from '../assets/agritech.png';
//-------------------IMAGE IMPORTS----------------------------

let builderText = [
    {
        align: 'left',
        uri: smartbindiagram,
        title: 'Co-founder | Smart Bin',
        subtitle: '2019-2020',
        text: 'Co-founded SmartBin with the goal of finding a solution to waste management. Solving big challenges is always something we love. Living in Singapore, we read a lot about the government efforts on zero waste to build a sustainable, resource-efficient and climate-resilient nation.',
    },
    {
        align: 'right',
        uri: devfest,
        title: 'Innovation Participant | Google Devfest',
        subtitle: '2019-2020',
        text: 'As co founders of sgsmartbin.com, we were invited to participate amongst a select group of technology innovators to present our innovation with the developer community in Singapore.'
    },
    {
        align: 'left',
        uri: agritech,
        title: 'Innovation Lab Intern | Palo IT',
        subtitle: '2019-2020',
        text: 'I am happy to have been an intern at Palo IT, a well known tech company in Asia and Europe which amongst otter things builds tech for sustainability. I was really fortunate to secure an internship with them where I got a chance to be involved in an agritech project to automate a greenhouse environment in an ethical farming community in Cambodia, paving the way for sustainable agriculture.',
    }
]
let leaderText = [
    {
        align: 'right',
        uri: blank,
        title: 'Art of Computer Science',
        subtitle: '2019-2020',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        align: 'left',
        uri: blank,
        title: 'Intel machine learning education program',
        subtitle: '2019-2020',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    }
]
let speakerText = [
    {
        align: 'left',
        uri: blank,
        title: 'TedX Talk',
        subtitle: '2019-2020',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        align: 'right',
        uri: blank,
        title: 'MUN Conferences',
        subtitle: '2019-2020',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    }
]
let learnerText = [
    {
        align: 'right',
        uri: blank,
        title: 'Japanese language',
        subtitle: '2019-2020',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        align: 'left',
        uri: blank,
        title: 'Instruments',
        subtitle: '2019-2020',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    }
]

const Experiences = () => {
    const [active, setActive] = useState([true, false, false, false]);
    const maps = [
        builderText.map(item => (
            <Experience align={item.align} uri={item.uri} title={item.title} subtitle={item.subtitle}>
                {item.text}
            </Experience>
        )),
        leaderText.map(item => (
            <Experience align={item.align} uri={item.uri} title={item.title} subtitle={item.subtitle}>
                {item.text}
            </Experience>
        )),
        speakerText.map(item => (
            <Experience align={item.align} uri={item.uri} title={item.title} subtitle={item.subtitle}>
                {item.text}
            </Experience>
        )),
        learnerText.map(item => (
            <Experience align={item.align} uri={item.uri} title={item.title} subtitle={item.subtitle}>
                {item.text}
            </Experience>
        )),
    ]
    return (
        <div className={styles.container}>
            <Helmet>
                <meta name="description" content="A record of my various experiences in High School, and many of my other interests" />
                <meta name="keywords" contnet="Teaching, MUN, Programming, Computer Science, MUN, Speaking, Japanese, Language learning, Kanji Trainer, ROB" />
            </Helmet>
            <Navbar />
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Experiences</h1>
                <div className={styles.menuWrapper}>
                    <div className={(active[0]? styles.activeMenuItem : styles.menuItem)} onClick={() => {setActive([true, false, false, false])}}>
                        BUILDER
                    </div>
                    <div className={(active[1]? styles.activeMenuItem : styles.menuItem)} onClick={() => {setActive([false, true, false, false])}}>
                        LEADER
                    </div>
                    <div className={(active[2]? styles.activeMenuItem : styles.menuItem)} onClick={() => {setActive([false, false, true, false])}}>
                        SPEAKER
                    </div>
                    <div className={(active[3]? styles.activeMenuItem : styles.menuItem)} onClick={() => {setActive([false, false, false, true])}}>
                        LEARNER
                    </div>
                </div>
                {maps[active.findIndex(i => i)]}
            </div>
            <Footer />
        </div>
    );
}

export default Experiences;