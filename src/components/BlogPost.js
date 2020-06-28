import React from 'react';
import styles from '../styles/blogpost.module.css';

const BlogPost = props => {
    return (
        <div className={styles.wrapper}>
            <img src={props.uri} alt={props.title} className={styles.thumbnail} />
            <label className={styles.date}>{props.date}</label>
            <h3 className={styles.title}>{props.title}</h3>
            <label className={styles.label}>{props.label}</label>
            <div className={styles.description}>
                {props.children}
            </div>
            <label className={styles.read}>Read More</label>
        </div>
    );
}

export default BlogPost;
