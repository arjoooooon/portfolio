import React from 'react';
import styles from '../styles/blogstyles/blogtemplate.module.css';
import Back from '../assets/SVG/back.svg';
import { Link } from 'gatsby';

const Header = props => {
    return (
        <div>
            <Link to="/blog" className={styles.backLink}>
                <img width={40} height={40} className={styles.back} src={Back} alt="go back"/>
            </Link>

            <div className={styles.wrapper}>
                <h1 className={styles.title}>{props.title}</h1>
                <h1 className={styles.date}>{props.date}</h1>
            </div>

            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    );
}

export default Header;