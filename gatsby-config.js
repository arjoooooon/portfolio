/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const autoprefixer = require("autoprefixer")
const browserslist = require("browserslist")

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Arjun Taneja: Tech Innovator, Speaker, Learner`,
    description: `Hi! I'm Arjun Taneja, and this is my personal portfolio.
    Learn more about projects such as my Smart Bin and Kanji Trainer here!`,
    keywords: `Technology, Speaker, Leader, Student, Learner, Kanji Trainer, Portfolio, Google Blog`,
    site_name: `Arjun Taneja portfolio`,
    image: ``,
    siteUrl: `https://www.arjuntaneja.com/`,
    url: ``,
    titleTemplate: ``,
    twitterUsername: `@badpotatoman`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-171794817-1",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          autoprefixer({
            grid: true,
          }),
          require(`postcss-preset-env`)({ stage: 0 }),
        ],
      },
    },
  ],
}
