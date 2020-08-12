import React from "react"
import { Link, graphql } from "gatsby"
import { SectionAbout, SectionSkill, SectionFreelancing, SectionContact } from "../components/home"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  });
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <SectionAbout />
      <SectionSkill />
      <SectionFreelancing />
      <SectionContact />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
