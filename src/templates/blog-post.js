import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import { Container, Row, Col } from "react-bootstrap"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext
  console.info('bg:', post.frontmatter.thumbnail)
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <section class="hero-wrap hero-wrap-2" style={{ background: `url(${post.frontmatter.thumbnail.publicURL})` }}>
        <div class="overlay"></div>
        <Container>
          <div class="row no-gutters slider-text align-items-end justify-content-center">
            <div class="col-md-9 ftco-animate pb-5 text-center fadeInUp ftco-animated">
              <h1 class="mb-3 bread">{post.frontmatter.title}</h1>
              <p class="breadcrumbs"><span class="mr-2"><a href="/">Home <i class="ion-ios-arrow-forward"></i></a></span> <span class="mr-2"><a href="/blog">Blog <i class="ion-ios-arrow-forward"></i></a></span> <span>{post.frontmatter.title}</span></p>
            </div>
          </div>
        </Container>
      </section>
      <Container>
        <Row>
          <Col md={8}>
            <article>
              <header>
                <h1
                  style={{
                    marginTop: rhythm(1),
                    marginBottom: 0,
                  }}
                >
                  {post.frontmatter.title}
                </h1>
                <p
                  style={{
                    ...scale(-1 / 5),
                    display: `block`,
                    marginBottom: rhythm(1),
                  }}
                >
                  {post.frontmatter.date}
                </p>
              </header>
              <section dangerouslySetInnerHTML={{ __html: post.html }} />
              <hr
                style={{
                  marginBottom: rhythm(1),
                }}
              />
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
            <div class="sidebar-box">
              <h3 class="heading-sidebar">Categories</h3>
              <ul class="categories">
                <li><a href="#">Interior Design <span>(12)</span></a></li>
                <li><a href="#">Exterior Design <span>(22)</span></a></li>
                <li><a href="#">Industrial Design <span>(37)</span></a></li>
                <li><a href="#">Landscape Design <span>(42)</span></a></li>
              </ul>
            </div>
            <div class="sidebar-box">
              <h3 class="heading-sidebar">Recent Blog</h3>
              <div class="block-21 mb-4 d-flex">
                <a class="blog-img mr-4"></a>
                <div class="text">
                  <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  <div class="meta">
                    <div><a href="#"><span class="icon-calendar"></span> March 12, 2019</a></div>
                    <div><a href="#"><span class="icon-person"></span> Admin</a></div>
                    <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                  </div>
                </div>
              </div>
              <div class="block-21 mb-4 d-flex">
                <a class="blog-img mr-4"></a>
                <div class="text">
                  <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  <div class="meta">
                    <div><a href="#"><span class="icon-calendar"></span> March 12, 2019</a></div>
                    <div><a href="#"><span class="icon-person"></span> Admin</a></div>
                    <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                  </div>
                </div>
              </div>
              <div class="block-21 mb-4 d-flex">
                <a class="blog-img mr-4"></a>
                <div class="text">
                  <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  <div class="meta">
                    <div><a href="#"><span class="icon-calendar"></span> March 12, 2019</a></div>
                    <div><a href="#"><span class="icon-person"></span> Admin</a></div>
                    <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="sidebar-box">
              <h3 class="heading-sidebar">Tag Cloud</h3>
              <div class="tagcloud">
                <a href="#" class="tag-cloud-link">house</a>
                <a href="#" class="tag-cloud-link">office</a>
                <a href="#" class="tag-cloud-link">building</a>
                <a href="#" class="tag-cloud-link">land</a>
                <a href="#" class="tag-cloud-link">table</a>
                <a href="#" class="tag-cloud-link">interior</a>
                <a href="#" class="tag-cloud-link">exterior</a>
                <a href="#" class="tag-cloud-link">industrial</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostTemplate($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
  }
`
