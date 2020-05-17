import React from 'react';
import styles from '../styles/experience.module.css';

const Experience = props => {
    const leftExp = (
        <div>
            <div className={styles.imgContainer}>
                <img src={props.uri} alt={props.title} width={470} height={236}/>
            </div>
            <div className={styles.content}>
                <h1 className={styles.title}>{props.title}</h1>
                <h3 className={styles.subtitle}>{props.subtitle}</h3>
                <p className={styles.description}>{props.children}</p>
                <a className={styles.link}>Read More</a>
            </div>
        </div>
    );

    const rightExp = (
        <div>
            <div className={styles.content} style={{textAlign: 'right'}}>
                <h1 className={styles.title}>{props.title}</h1>
                <h3 className={styles.subtitle}>{props.subtitle}</h3>
                <p className={styles.description}>{props.children}</p>
                <a className={styles.link}>Read More</a>
            </div>
            <div className={styles.imgContainer}>
                <img src={props.uri} alt={props.title} width={447} height={241}/>
            </div>
        </div>
    );
    return (
        <div className={styles.wrapper}>
            {(props.align==='right')? leftExp : rightExp}
        </div>
    )
}

export default Experience;