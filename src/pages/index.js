import React from "react"
import { Link, graphql } from "gatsby"
import { Container } from "react-bootstrap"
import {
  SectionAbout,
  SectionSkill,
  SectionFreelancing,
  SectionContact,
  SectionProjects,
  SectionBlogs,
  SectionHero,
} from "../components/home"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import AOS from "aos"
import "aos/dist/aos.css"

const HomeIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.blog.edges
  const projects = data.projects.edges

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  })
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <SectionHero />
      <SectionAbout />
      <SectionSkill />
      <SectionFreelancing />
      <SectionProjects data={projects} />
      <SectionBlogs data={posts} />
      <SectionContact />
    </Layout>
  )
}

export default HomeIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    blog: allMarkdownRemark(filter: { fields: { collection: { eq: "blog" } } }
    limit: 3) {
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
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
    projects: allMarkdownRemark(filter: { fields: { collection: { eq: "projects" } } }
    limit: 5) {
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
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
  }
`
