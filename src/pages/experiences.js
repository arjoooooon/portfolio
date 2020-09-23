import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import styles from '../styles/experiences.module.css';
import Experience from '../components/Experience';

import Anime from 'react-anime';
import anime from 'animejs/lib/anime.es';

//-------------------IMAGE IMPORTS----------------------------
import devfest from '../assets/images/devfest.png';
import blank from '../assets/images/blank.png';
import smartbindiagram from '../assets/images/smartbindiagram.png';
import agritech from '../assets/images/agritech2.png';
import tedtalk from '../assets/images/tedtalk.jpg';
import artofcs from '../assets/images/artofcs.jpg';
import munpic from '../assets/images/munpic.jpg';
import Layout from '../components/layout';
import compProgramming from '../assets/images/competitiveprogramming.png';
import guitar from '../assets/images/guitar.jpg';
import japanese from '../assets/images/japaneselanguage.png';
//-------------------IMAGE IMPORTS----------------------------

let builderText = [
    {
        align: 'left',
        uri: smartbindiagram,
        title: 'Co-founder | ROB',
        subtitle: '2019-2020',
        text: 'Co-founded ROB, The Smart Bin, with the goal of finding a solution to waste management. Solving big challenges is always something we love. Living in Singapore, we read a lot about the government efforts on zero waste to build a sustainable, resource-efficient and climate-resilient nation.',
        href: 'https://www.blog.google/around-the-globe/google-asia/singapore-students-using-cloud-smarter-recycling/',
        linkText: 'Read More',
    },
    {
        align: 'right',
        uri: devfest,
        title: 'Innovation Participant | Google Devfest',
        subtitle: '2019',
        text: 'As co founders of sgsmartbin.com, we were invited to participate amongst a select group of technology innovators to present our innovation with the developer community in Singapore.',
        href: 'https://sgsmartbin.com/',
        linkText: 'Read More',
    },
    {
        align: 'left',
        uri: agritech,
        title: 'Innovation Lab Intern | Palo IT',
        subtitle: '2019-2020',
        text: 'I am happy to have been an intern at Palo IT, a well known tech company in Asia and Europe which amongst otter things builds tech for sustainability. I was really fortunate to secure an internship with them where I got a chance to be involved in an agritech project to automate a greenhouse environment in an ethical farming community in Cambodia, paving the way for sustainable agriculture.',
        href: 'https://www.youtube.com/watch?v=RnakCS9NuH0',
        linkText: 'Watch Video',
    }
]
let leaderText = [
    {
        align: 'right',
        uri: artofcs,
        title: 'Art of Computer Science',
        subtitle: '2018-2021',
        text: "In Grade 11 and 12, I co-led an activity called “The Art of Computer Science”. I taught a class of around 20 students programming fundamentals in Java. Teaching this class was a rewarding experience for me as I learned how to organise and articulate complex concepts in an approachable way.",
        href: '/blog',
        linkText: 'Read More',
    },
    {
        align: 'left',
        uri: compProgramming,
        title: "Comptetitive Programming",
        subtitle: '2019-2020',
        text: 'I was the leader of my school team in the Singaporean National Olympiad in Informatics (NOI). I organised meetings and training sessions. We learned a lot about complex data structures and algorithms, but more importantly, improved the way in which we approached complex problems.',
    }
]
let speakerText = [
    {
        align: 'left',
        uri: tedtalk,
        title: 'TedX Talk',
        subtitle: '2018',
        text: "In 2018 I had the opportunity to deliver a TedX talk on the subject of religion and philosophy. I was thrilled to be on board as it offered a platform for me to communicate my thoughts on a topic that I take great interest in.",
        href: 'https://www.youtube.com/watch?v=KFnjbNJDhLc',
        linkText: 'Watch Video',
    },
    {
        align: 'right',
        uri: munpic,
        title: 'Model United Nations',
        subtitle: '2017-2020',
        text: "Over the past few years, I have had the privilege of taking on many roles in my school’s Model United Nations club (debate). I have been a student, learning about the tenets of public speaking; an administrator, organizing conferences and liaising with other schools; and a teacher, teaching students about public speaking principles.",
        href: '/blog',
        linkText: 'Read More',
    }
]
let learnerText = [
    {
        align: 'right',
        uri: japanese,
        title: 'Japanese language',
        subtitle: '2018-2020',
        text: "Two years ago, out of an interest for anime and for Japanese culture in general, I decided to embark on a Japanese language learning journey. Today, I feel like I have gained a greater appreciation not only of the Japanese language and culture, but also languages in general. It always amazes me how language changes the way that we are able to express ourselves.",
        href: '/blog',
        linkText: 'Read More',
    },
    {
        align: 'left',
        uri: guitar,
        title: 'Music',
        subtitle: '2017-2020',
        text: "I would say that music has become a large part of how I identify myself. I play two instruments–the piano and the guitar–and I take great pleasure in performing, composing, and listening to music. My favourite genre is Progressive Metal, though I also enjoy listening to Rock, Electronic, and Classical music as well.",
        href: '/blog',
        linkText: 'Read More',
    }
]

const Experiences = () => {
    const [active, setActive] = useState([true, false, false, false]);
    const maps = [
        builderText.map(item => (
            <Experience align={item.align} uri={item.uri} title={item.title} subtitle={item.subtitle} linkText={item.linkText} href={item.href}>
                {item.text}
            </Experience>
        )),
        leaderText.map(item => (
            <Experience align={item.align} uri={item.uri} title={item.title} subtitle={item.subtitle} linkText={item.linkText} href={item.href}>
                {item.text}
            </Experience>
        )),
        speakerText.map(item => (
            <Experience align={item.align} uri={item.uri} title={item.title} subtitle={item.subtitle} linkText={item.linkText} href={item.href}>
                {item.text}
            </Experience>
        )),
        learnerText.map(item => (
            <Experience align={item.align} uri={item.uri} title={item.title} subtitle={item.subtitle} linkText={item.linkText} href={item.href}>
                {item.text}
            </Experience>
        )),
    ]

    const [renderedOnce, setRenderedOnce] = useState(false);

    return (

        <Layout>
            <Helmet>
                <title>Arjun Taneja: Tech Innovator, Speaker, Learner</title>
                <meta name="description" content="A record of my various experiences in High School, and many of my other interests" />
                <meta name="keywords" contnet="Teaching, MUN, Programming, Computer Science, MUN, Speaking, Japanese, Language learning, Kanji Trainer, ROB" />
            </Helmet>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Experiences</h1>
                <div className={styles.menuWrapper}>
                    <Anime delay={anime.stagger(100)}
                        scale={[
                            {value: (renderedOnce)? 1 : 0.98, easing: 'easeOutSine', duration: 500},
                            {value: 1, easing: "easeOutSine", duration: 500}
                        ]}
                        delay={anime.stagger(200, {grid: [20, 4], from: 'center'})}
                    >
                    <div className={(active[0]? styles.activeMenuItem : styles.menuItem)} onClick={() => {setActive([true, false, false, false]); setRenderedOnce(true)}}>
                        BUILDER
                    </div>
                    <div className={(active[1]? styles.activeMenuItem : styles.menuItem)} onClick={() => {setActive([false, true, false, false]); setRenderedOnce(true)}}>
                        LEADER
                    </div>
                    <div className={(active[2]? styles.activeMenuItem : styles.menuItem)} onClick={() => {setActive([false, false, true, false]); setRenderedOnce(true)}}>
                        SPEAKER
                    </div>
                    <div className={(active[3]? styles.activeMenuItem : styles.menuItem)} onClick={() => {setActive([false, false, false, true]); setRenderedOnce(true)}}>
                        LEARNER
                    </div>
                    </Anime>
                </div>
                <Anime delay={anime.stagger(100)} scale={[0.95, 1]}>
                {maps[active.findIndex(i => i)]}
                </Anime>
            </div>
        </Layout>
    );
}

export default Experiences;