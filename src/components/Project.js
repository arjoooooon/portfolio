import React from 'react';
import styles from '../styles/project.module.css';

import Anime from 'react-anime';
import anime from 'animejs/lib/anime.es';

const Project = props => {
    const techList = (
        <div>
        <ul className={styles.list}>
            {props.techs.map(tech => (
                <li className={styles.techItem} key={tech}>{tech}</li>
            ))}
        </ul>
        </div>
    );

    return (
        <div className={styles.container}>
            <Anime delay={anime.stagger(1000)} scale={[0.9, 1]}>
                <div className={styles.imgContainer}>
                    <img src={props.uri} alt={props.title} width={313} height={157}/>
                </div>
            </Anime>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>{props.title}</h1>
                <span><a className={styles.link} href={props.link} target="_blank">{props.link}</a></span>
                <p className={styles.description}>{props.children}</p>
                {techList}
            </div>

        </div>
    );
}

export default Project;