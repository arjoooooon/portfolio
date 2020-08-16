import React from "react"
import Masonry from 'react-masonry-component';

const masonryOptions = {
    transitionDuration: 0,
    fitWidth: true,
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

class SectionProjects extends React.Component {
    render() {
        const { data } = this.props
        return (
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
                        {data.map(({ node }, index) => {
                            const title = node.frontmatter.title || node.fields.slug
                            const thumbnail = node.frontmatter.thumbnail ? node.frontmatter.thumbnail.publicURL : ''
                            return (
                                <div className="project" key={index}>
                                    <div data-aos='fade-up' className="image-element-class  img img-2 d-flex justify-content-center align-items-center">
                                        <div><img src={thumbnail} alt={title} /></div>
                                        <div className="overlay"></div>
                                        <div className="text text-center p-4">
                                            <h3><a href="#">{title}</a></h3>
                                            <span>Web Design</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Masonry>
                </div>
            </section>
        )
    }
}

export default SectionProjects