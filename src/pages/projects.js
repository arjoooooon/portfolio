import React from 'react';
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import Masonry from 'react-masonry-component';
import SEO from "../components/seo"
import AOS from "aos"
import "aos/dist/aos.css"

const masonryOptions = {
    transitionDuration: 0,
    fitWidth: true,
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }
const PageProject = ({ data }) => {
    const projectPost = data.allMarkdownRemark.edges

    React.useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        })
    })
    return (
        <Layout>
            <SEO title="Projects" />
            <section className="ftco-section ftco-project" id="projects-section">
                <div className="container">
                    <div className="row justify-content-center pb-5">
                        <div data-aos='fade-up' className="col-md-12 heading-section text-center">
                            <span className="subheading">Accomplishments</span>
                            <h2 className="mb-4">Our Projects</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>
                    </div>
                    <Masonry
                        className={'my-gallery-class'} // default ''
                        elementType={'div'} // default 'div'
                        options={masonryOptions} // default {}
                        disableImagesLoaded={false} // default false
                        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                        imagesLoadedOptions={imagesLoadedOptions} // default {}
                    >
                        {projectPost.map(({ node }, index) => {
                            const title = node.frontmatter.title || node.fields.slug
                            const slug = node.fields.slug
                            const thumbnail = node.frontmatter.thumbnail ? node.frontmatter.thumbnail.publicURL : ''
                            return (
                                <div className="project" key={index}>
                                    <div data-aos='fade-up' className="image-element-class  img img-2 d-flex justify-content-center align-items-center">
                                        <div><img src={thumbnail} alt={title} /></div>
                                        <div className="overlay"></div>
                                        <div className="text text-center p-4">
                                            <h3><a href={slug}>{title}</a></h3>
                                            <span>Web Design</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Masonry>
                </div>
            </section>
        </Layout>
    );
}
export default PageProject
export const pageQuery = graphql`
  query PageProject{
    allMarkdownRemark(filter: { fields: { collection: { eq: "projects" } } }
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
