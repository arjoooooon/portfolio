import React,{ useState} from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/experiences.module.css';
import Experience from '../components/Experience';
import blank from '../assets/blank.png';
import devfest from '../assets/devfest.png';
import Footer from '../components/Footer.js';

let builderText = [
    {
        align: 'left',
        uri: blank,
        title: 'Smart Bin',
        subtitle: '2019-2020',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        align: 'right',
        uri: devfest,
        title: 'DevFest',
        subtitle: '2019-2020',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
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