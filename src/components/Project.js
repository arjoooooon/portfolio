import React from 'react';
import styles from '../styles/project.module.css';

const Project = props => {
    const techList = (
        <div>
        <ul>
            {props.techs.map(tech => (
                <li className={styles.techItem} key={tech}>{tech}</li>
            ))}
        </ul>
        </div>
    );

    return (
        <div className={styles.container}>
            <img src={props.uri} alt={props.title} className={styles.image} width={313} height={157}/>
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