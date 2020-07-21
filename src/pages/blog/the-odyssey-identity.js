import React from 'react';
import { Helmet } from 'react-helmet';
import BlogTemplate from '../../components/BlogTemplate';

const Post = () => {
    return (
        <div>
            <Helmet>
                <title>Arjun Taneja: Tech Innovator, Speaker, Learner</title>
            </Helmet>

            <BlogTemplate title='What "The Odyssey" teaches us about identity' date='January 16, 2020'>
                Why hello there!
            </BlogTemplate>
        </div>
    );
}

export default Post;