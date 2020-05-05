import React from 'react';
import styles from '../styles/navbar.module.css';
import { Link } from 'gatsby';

const Navbar = () => {
    return (
        <div className = {styles.container} >
            <ul className={styles.navContainer} >
                <li className={styles.navItem} ><Link className={styles.link} to='/'>HOME</Link></li>
                <li className={styles.navItem} ><Link className={styles.link} to='/experience'>EXPERIENCE</Link></li>
                <li className={styles.navItem} ><Link className={styles.link} to='/projects'>PROJECTS</Link></li>
                <li className={styles.navItem} ><Link className={styles.link} to='/blog'>BLOG</Link></li>
                <li className={styles.navItem} ><Link className={styles.link} to='/contact'>GET IN TOUCH</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;