/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import SEO from "./Seo"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children, className, data }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            defaultKeywords: keywords
            siteUrl
            image
            twitterUsername
            site_name
          }
        }
      }
    `}
    render={data => {
      return (
        <React.Fragment>
          <Helmet
            title={"title"}
            meta={[
              {
                name: "description",
                content: "data.description",
              },
              {
                name: "keywords",
                content: "data.keywords",
              },
            ]}
          ></Helmet>
          <Navbar />
          <main className="main">{children}</main>
          <Footer />
        </React.Fragment>
      )
    }}
  />
)

export default Layout
