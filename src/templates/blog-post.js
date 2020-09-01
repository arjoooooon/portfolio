import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.post
  const { previous, next } = pageContext
  const relativePost = data.recent

  const arrCat = data.recent.edges
  const blogListCat = []
  arrCat.map((item, index) => {
    const cat = item.node.frontmatter.category
    if (cat)
      blogListCat.push({ cat })
  })

  const listCat = []
  blogListCat.map((item, index) => {
    const cat = item.cat
    const found = listCat.find(itm => itm.cat !== undefined && itm.cat === cat)
    const countCat = blogListCat.filter(itm => itm.cat === cat)
    if (!found) {
      listCat.push({ cat: cat, count: countCat.length })
    }
  })
  console.info('listCat:', listCat)
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: `url(${(post.frontmatter.thumbnail)? post.frontmatter.thumbnail.publicURL : ""})` }}>
        <div className="overlay"></div>
        <Container>
          <div className="row no-gutters slider-text align-items-end justify-content-center">
            <div className="col-md-9 pb-5 text-center">
              <h1 className="mb-3 bread" style={{backgroundColor: 'white', paddingTop: 10, paddingBottom: 10}}>{post.frontmatter.title}</h1>
              <p className="breadcrumbs"><span className="mr-2" style={{backgroundColor: 'white'}}><a href="/">Home <i className="ion-ios-arrow-forward"></i></a></span> <span className="mr-2" style={{backgroundColor: 'white'}}><a href="/blog">Blog <i className="ion-ios-arrow-forward"></i></a></span></p>
            </div>
          </div>
        </Container>
      </section>
      <Container className="arja-section">
        <Row>
          <Col md={8}>
            <article>
              <div className="header-blog">
                <h2 class="mb-3">{post.frontmatter.title}</h2>
                <p>
                  {post.frontmatter.date}
                </p>
              </div>
              <section dangerouslySetInnerHTML={{ __html: post.html }} />
              <hr />
              <footer>
                <Bio />
              </footer>
            </article>

            <nav>
              <ul
                style={{
                  display: `flex`,
                  flexWrap: `wrap`,
                  justifyContent: `space-between`,
                  listStyle: `none`,
                  padding: 0,
                }}
              >
                <li>
                  {previous && (
                    <Link to={previous.fields.slug} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    <Link to={next.fields.slug} rel="next">
                      {next.frontmatter.title} →
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          </Col>
          <Col md={4}>
            {
              listCat && (
                <div className="sidebar-box">
                  <h3 className="heading-sidebar">Categories</h3>
                  <ul className="categories">
                    {
                      listCat.map((itcat, key) => (
                        <li><a href="#">{itcat.cat} <span>({itcat.count})</span></a></li>
                      ))
                    }
                  </ul>
                </div>
              )
            }

            {
              relativePost && (
                <div className="sidebar-box">
                  <h3 className="heading-sidebar">Recent Blog</h3>
                  {
                    relativePost.edges.map((itm, index) => (
                      <div className="block-21 mb-4 d-flex" key={index}>
                        <a className="blog-img mr-4"><img src={(itm.node.frontmatter.thumbnail)? itm.node.frontmatter.thumbnail.publicURL : ""} alt={itm.node.frontmatter.title} /></a>
                        <a href={itm.node.fields.slug} className="text">
                          <h3 className="heading">{itm.node.frontmatter.title}</h3>
                          <div className="meta">
                            <div><span className="icon-calendar"></span> March 12, 2019</div>
                            <div><span className="icon-person"></span> Admin</div>
                            <div><span className="icon-chat"></span> 19</div>
                          </div>
                        </a>
                      </div>
                    )
                    )
                  }
                </div>
              )
            }
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostTemplate($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        thumbnail {
          publicURL
        }
      }
    }
    recent: allMarkdownRemark(
      filter: { fields: { collection: { eq: "blog" }, slug: { ne: $slug } } }
      limit: 3
    ) {
      edges {
        node {
          id
          html
          fields {
            slug
          }
          frontmatter {
            date
            title
            thumbnail {
              publicURL
            }
            category
          }
        }
      }
    }
    cat: allMarkdownRemark(filter: { fields: { collection: { eq: "blog" } } }) {
      edges {
        node {
          id
          html
          fields {
            slug
          }
          frontmatter {
            date
            title
            thumbnail {
              publicURL
            }
            description
            category
          }
        }
      }
    }
  }
`
