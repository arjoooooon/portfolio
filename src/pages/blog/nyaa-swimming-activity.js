import React from 'react';
import { Helmet } from 'react-helmet';
import BlogTemplate from '../../components/BlogTemplate';

const Post = () => {
    return (
        <div>
            <Helmet>
                <title>Arjun Taneja: Tech Innovator, Speaker, Learner</title>
            </Helmet>

            <BlogTemplate title='NYAA: Swimming Activity' date='Feb 25, 2019'>
                Why hello there!
            </BlogTemplate>
        </div>
    );
}

export default Post;