import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../components/Navbar'
import styles from '../../styles/blog.module.css';
import BlogPost from '../../components/BlogPost';
import Photo1 from '../../assets/Images/Blog_photo1.png';
import Photo2 from '../../assets/Images/Blog_photo2.png';
import Photo3 from '../../assets/Images/Blog_photo3.jpg';
import Photo4 from '../../assets/Images/Blog_photo4.jpg';
import Photo5 from '../../assets/blank.png';


//Width 418 Height 234

const Blog = () => {

    return (
        <div className={styles.container}>
            <Helmet>
                <title>Arjun Taneja: Tech Innovator, Speaker, Learner</title>
                <meta name="description" content="Some of my thoughts and musings on various things" />
                <meta name="keywords" content="blog, CAS, NYAA, activities, Kanji Trainer, juggling, ROB, japanese, learning, speaking, leading" />
            </Helmet>

            <Navbar />

            <div className={styles.headerContainer}>
                <h1 className={styles.header}>Blog</h1>
            </div>

            <div className={styles.centered}>
                <div className={styles.postContainer}>
                    <div className={styles.containerOne}>

                        <BlogPost uri={Photo1} date="May 9, 2020" title="Lockdown Shred" label="ACTIVITY | CAS" addr='/blog/lockdown-shred'>
                            One of the things that the coronavirus lockdown has given me is a lot of extra time. 
                            Given this, I thought I might invest some of it in improving my guitar skills. 
                            There was this song that I tried to play a year ago, though I never properly finished it. 
                            Here’s my progress at 120BPM with some rough edges and an intense concentration face. 
                            I’ll make another update when I get better at this!
                        </BlogPost>

                        <BlogPost uri={Photo3} date="January 16, 2020" title='What "The Odyssey" teaches us about identity' label="ACADEMICS | ENGLISH" addr="/blog/the-odyssey-identity">
                            <i>
                                "Be guided by the gods. / Now it is time to think of your own country, / if you are fated 
                                to survive and reach / your high-roofed house and your forefather's land"
                            </i><br/><br/>
                            "The Odyssey" is the story of a man trying to return to his homeland after several years of war. 
                            However, his journey is symbolic of something greater––the journey to leave behind his warlike persona
                            in order to love, trust, and unite with his family once more. It is a story of how we contend 
                            with multiple, sometimes conflicting identities.
                        </BlogPost>

                    </div>

                    <div className={styles.containerTwo}>

                        <BlogPost uri={Photo2} date="Feb 25, 2019" title="NYAA: Swimming Activity" label="ACTIVITY | NYAA" addr="/blog/nyaa-swimming-activity">
                            Since I was in the seventh grade, I have been attending swimming training. Therefore, 
                            this requirement wasn’t out of the ordinary for me. For the six weeks that I participated, 
                            I continued to improve my strength, stamina, and technique. Here is what I improved on, and 
                            what I want to continue working on in the future:
                        </BlogPost>

                        <BlogPost uri={Photo4} date="Feb 4, 2020" title="Fitness with Hougang Care Center" label="SERVICE | CAS" addr="/blog/fitness-with-hougang-care-center">
                            I definitely had some doubts about how this service would go. Would the people that we would 
                            meet be open to fostering a relationship? Would they enjoy the games that we spent time planning 
                            for them? And most of all, will this be a waste of my Tuesday afternoon?
                        </BlogPost>

                        <BlogPost uri={Photo5} date="November 18, 2019" title="Some thoughts on the career test" label="ACADEMICS | PSE" addr="/blog/some-thoughts-on-the-career-test">
                            In class, we completed a test that would indicate our strengths and interests, and thus present a 
                            stream of possible career choices that would work well with our qualities. I personally believe that
                            these tests are contrived, often telling us what we want to hear. Nevertheless, these are my results:
                        </BlogPost>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;