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
        title: 'Co-founder | ROB',
        subtitle: '2019-2020',
        text: 'Co-founded ROB, The Smart Bin, with the goal of finding a solution to waste management. Solving big challenges is always something we love. Living in Singapore, we read a lot about the government efforts on zero waste to build a sustainable, resource-efficient and climate-resilient nation.',
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
        text: "In Grade 11 and 12, I co-led an activity called “The Art of Computer Science”. I taught a class of around 20 students programming fundamentals in Java. Teaching this class was a rewarding experience for me as I learned how to organise and articulate complex concepts in an approachable way.",
    },
    {
        align: 'left',
        uri: blank,
        title: "Comptetitive Programming",
        subtitle: '2019-2020',
        text: 'I was the leader of my school team in the Singaporean National Olympiad in Informatics (NOI). I organised meetings and training sessions. We learned a lot about complex data structures and algorithms, but more importantly, improved the way in which we approached complex problems.',
    }
]
let speakerText = [
    {
        align: 'left',
        uri: blank,
        title: 'TedX Talk',
        subtitle: '2019-2020',
        text: "In 2018 I had the opportunity to deliver a TedX talk on the subject of religion and philosophy. I was thrilled to be on board as it offered a platform for me to communicate my thoughts on a topic that I take great interest in.",
    },
    {
        align: 'right',
        uri: blank,
        title: 'Model United Nations',
        subtitle: '2019-2020',
        text: "Over the past few years, I have had the privilege of taking on many roles in my school’s Model United Nations club (debate). I have been a student, learning about the tenets of public speaking; an administrator, organizing conferences and liaising with other schools; and a teacher, teaching students about public speaking principles.",
    }
]
let learnerText = [
    {
        align: 'right',
        uri: blank,
        title: 'Japanese language',
        subtitle: '2019-2020',
        text: "Two years ago, out of an interest for anime and for Japanese culture in general, I decided to embark on a Japanese language learning journey. Today, I feel like I have gained a greater appreciation not only of the Japanese language and culture, but also languages in general. It always amazes me how language changes the way that we are able to express ourselves.",
    },
    {
        align: 'left',
        uri: blank,
        title: 'Music',
        subtitle: '2019-2020',
        text: "I would say that music has become a large part of how I identify myself. I play two instruments–the piano and the guitar–and I take great pleasure in performing, composing, and listening to music. My favourite genre is Progressive Metal, though I also enjoy listening to Rock, Electronic, and Classical music as well.",
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
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-3BSFLBTLG1"></script>
                <script src="../scripts/gtag.js"></script>
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