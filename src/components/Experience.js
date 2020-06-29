import React from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';
import styles from '../styles/experience.module.css';

//0.539

const Experience = props => {
    const { width, height } = useWindowDimensions();

    const leftExp = (
        <div className={styles.contentWrapper}>
            <div className={styles.imgContainer}>
                <img src={props.uri} alt={props.title} className={styles.image}/>
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
            <div className={styles.rightContent}>
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
            {(width > 480)? ((props.align==='right')? leftExp : rightExp) : leftExp}
        </div>
    )
}

export default Experience;