import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/index2.module.css';
import muguri from '../assets/mugshot.png'

const Index2 = () => {
    return (
        <div className={styles.container}>
            <Navbar />

                <div className={styles.headWrapper}>
                    <div className={styles.imageContainer}>
                        <img src={muguri} alt="face" />
                    </div>
                    <div className={styles.descriptionContainer}>
                        <h1 className={styles.descriptionHeader}>Hi! I'm Arjun.</h1>
                    </div>
                </div>

            <Footer />
        </div>
    )
}

export default Index2;