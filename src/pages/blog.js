import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar'
import styles from '../styles/blog.module.css';
import BlogPost from '../components/BlogPost';
import Photo1 from '../assets/Images/Blog_photo1.png';
import Photo2 from '../assets/Images/Blog_photo2.png';

//Width 418 Height 234

const Blog = () => {
    return (
        <div className={styles.container}>
            <Helmet>
                <meta name="description" content="Some of my thoughts and musings on various things" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-3BSFLBTLG1"></script>
                <script src="../scripts/gtag.js"></script>
                <meta name="keywords" content="blog, CAS, NYAA, activities, Kanji Trainer, juggling, ROB, japanese, learning, speaking, leading" />
            </Helmet>

            <Navbar />
            <div className={styles.centered}>
                <div className={styles.postContainer}>
                    <BlogPost uri={Photo1} date="May 9, 2020" title="Lockdown Shred" label="ACTIVITY | CAS">
                        One of the things that the coronavirus lockdown has given me is a lot of extra time. 
                        Given this, I thought I might invest some of it in improving my guitar skills. 
                        There was this song that I tried to play a year ago, though I never properly finished it. 
                        Here’s my progress at 120BPM with some rough edges and an intense concentration face. 
                        I’ll make another update when I get better at this!
                    </BlogPost>

                    <BlogPost uri={Photo2} date="Feb 25, 2019" title="NYAA: Swimming Activity" label="ACTIVITY | NYAA">
                        Since I was in the seventh grade, I have been attending swimming training. Therefore, 
                        this requirement wasn’t out of the ordinary for me. For the six weeks that I participated, 
                        I continued to improve my strength, stamina, and technique. Here is what I improved on, and 
                        what I want to continue working on in the future:
                    </BlogPost>
                </div>
            </div>
        </div>
    );
}

export default Blog;