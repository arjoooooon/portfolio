import React from 'react';
import { Helmet } from 'react-helmet';
import BlogTemplate from '../../components/BlogTemplate';

const Post = () => {
    return (
        <div>
            <Helmet>
                <title>Arjun Taneja: Tech Innovator, Speaker, Learner</title>
            </Helmet>

            <BlogTemplate title='Fitness with Hougang Care Center' date='Feb 4, 2020'>
                Why hello there!
            </BlogTemplate>
        </div>
    );
}

export default Post;