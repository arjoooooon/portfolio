const path = require(`path`);

exports.createPages = ({boundActionCreators}) => {
    const {createPage } = boundActionCreators;
    createPage({
        path: '/blog/lockdown-shred',
        component: path.resolve('./src/pages/blog/lockdown-shred.js'),
        context: {},
    });
    createPage({
        path: '/blog/the-odyssey-identity',
        component: path.resolve('./src/pages/blog/the-odyssey-identity.js'),
        context: {},
    });
    createPage({
        path: '/blog/some-thoughts-on-the-career-test',
        component: path.resolve('./src/pages/blog/some-thoughts-on-the-career-test.js'),
        context: {},
    });
    createPage({
        path: '/blog/nyaa-swimming-activity',
        component: path.resolve('./src/pages/blog/nyaa-swimming-activity.js'),
        context: {},
    });
    createPage({
        path: '/blog/fitness-with-hougang-care-center',
        component: path.resolve('./src/pages/blog/fitness-with-hougang-care-center.js'),
        context: {},
    });
}
