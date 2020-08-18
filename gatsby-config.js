module.exports = {
  siteMetadata: {
    title: `Arjun Taneja: Tech Innovator, Speaker, Learner`,
    author: {
      name: `Arjun Taneja`,
      summary: `Arjun Taneja: Tech Innovator, Speaker, Learner`,
    },
    description: `Hi! I'm Arjun Taneja, and this is my personal portfolio.
    Learn more about projects such as my Smart Bin and Kanji Trainer here!`,
    keywords: `Technology, Speaker, Leader, Student, Learner, Kanji Trainer, Portfolio, Google Blog`,
    site_name: `Arjun Taneja portfolio`,
    siteUrl: `https://www.arjuntaneja.com/`,
    social: {
      twitter: `@badpotatoman`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-171794817-1",
      },
    },
    // {
    //   resolve: `gatsby-plugin-postcss`,
    //   options: {
    //     postCssPlugins: [
    //       autoprefixer({
    //         grid: true,
    //       }),
    //       require(`postcss-preset-env`)({ stage: 0 }),
    //     ],
    //   },
    // },
    `gatsby-plugin-feed`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
