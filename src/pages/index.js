import React from "react"
import {
  SectionAbout,
  SectionSkill,
  SectionContact,
  SectionProjects,
  SectionBlogs,
  SectionHero,
  SectionMention,
} from "../components/home"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AOS from "aos"
import "aos/dist/aos.css"
import Helmet from 'react-helmet';

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
        <Helmet>
            <title>Arjun Taneja: Tech Innovator, Speaker, Learner</title>
            <meta name="description" content="Feel free to get in touch! I'm open to talking about cool, new ideas––or to just have an interesting conversation." />
            <meta name="keywords" content="Smart Bin, Kanji Trainer, Arjun Taneja, Innovator, Speaker, High School, Technology" />
        </Helmet>

        <SEO title="All posts" />
        <SectionHero />
        <SectionAbout />
        <SectionSkill />
        <SectionProjects data={projects} />
        <SectionMention />
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
    limit: 6) {
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
