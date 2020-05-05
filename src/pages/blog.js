import React from 'react';
import Navbar from '../components/Navbar'
import styles from '../styles/blog.module.css';

const Blog = () => {
    return (
        <div className={styles.container}>
            <Navbar />
        </div>
    );
}

export default Blog;