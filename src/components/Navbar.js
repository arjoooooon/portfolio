import React from 'react';
import styles from '../styles/navbar.module.css';
import { Link } from 'gatsby';

const Navbar = () => {
    return (
        <div className = {styles.container} >
            <ul className={styles.navContainer} >
                <li className={styles.navItem} ><Link className={styles.link} activeStyle={{color: '#4990E2'}} to='/'>HOME</Link></li>
                <li className={styles.navItem} ><Link className={styles.link} activeStyle={{color: '#4990E2'}} to='/experiences'>EXPERIENCES</Link></li>
                <li className={styles.navItem} ><Link className={styles.link} activeStyle={{color: '#4990E2'}} to='/projects'>PROJECTS</Link></li>
                <li className={styles.navItem} ><Link className={styles.link} activeStyle={{color: '#4990E2'}} to='/blog'>BLOG</Link></li>
                <li className={styles.navItem} ><Link className={styles.link} activeStyle={{color: '#4990E2'}} to='/contact'>GET IN TOUCH</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;