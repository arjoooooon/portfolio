import React from 'react';
import BlogTemplate from '../../components/BlogTemplate.js';
import '../../styles/blogstyles/removebodymargin.css';
import styles from '../../styles/blogstyles/lockdown-shred.module.css';
import { Helmet } from 'react-helmet';

const Post = () => {
    return (
        <div>
            <Helmet>
                <title>Arjun Taneja: Tech Innovator, Speaker, Learner</title>
            </Helmet>
            <BlogTemplate title="Lockdown Shred" date="May 9, 2020">
                <div className={styles.wrapper}>
                    <div className={styles.content}>

                        <iframe className={styles.video} width="560" height="315" src="https://www.youtube.com/embed/pzCBbZn7dA8" 
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>

                        <p className={styles.text}>
                            One of the things that the coronavirus lockdown has given me is a lot 
                            of extra time. Given this, I thought I might invest some of it in improving 
                            my guitar skills. There was this song that I tried to play a year ago, though 
                            I never properly finished it. Here’s my progress at 120BPM with some rough edges 
                            and an intense concentration face. I’ll make another update when I get better at 
                            this!
                        </p>
                    </div>
                </div>
            </BlogTemplate>

        </div>
    );
}

export default Post;