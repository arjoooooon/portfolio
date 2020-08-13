import React from "react"

const SectionProjects = ({ data }) => {
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
                <div className="row">
                    {data.map(({ node }, index) => {
                        const title = node.frontmatter.title || node.fields.slug
                        const thumbnail = node.frontmatter.thumbnail ? node.frontmatter.thumbnail.publicURL : ''
                        if (index === 1) {
                            return (<div className="col-md-8">
                                <div data-aos='fade-up' className="project img img-2 d-flex justify-content-center align-items-center" style={{ background: `url(${thumbnail})` }}>
                                    <div className="overlay"></div>
                                    <div className="text text-center p-4">
                                        <h3><a href="#">{title}</a></h3>
                                        <span>Web Design</span>
                                    </div>
                                </div>
                            </div>)
                        } else if (index === 2) {
                            return (
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div data-aos='fade-up' className="project img d-flex justify-content-center align-items-center" style={{ background: `url(${thumbnail})` }}>
                                                <div className="overlay"></div>
                                                <div className="text text-center p-4">
                                                    <h3><a href="#">{title}</a></h3>
                                                    <span>Web Design</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div data-aos='fade-up' className="project img d-flex justify-content-center align-items-center" style={{ background: `url(${thumbnail})` }}>
                                                <div className="overlay"></div>
                                                <div className="text text-center p-4">
                                                    <h3><a href="#">{title}</a></h3>
                                                    <span>Web Design</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        } else if (index === 4) {
                            return (
                                <div className="col-md-4">
                                    <div data-aos='fade-up' className="project img d-flex justify-content-center align-items-center" style={{ background: `url(${thumbnail})` }}>
                                        <div className="overlay"></div>
                                        <div className="text text-center p-4">
                                            <h3><a href="#">{title}</a></h3>
                                            <span>Web Design</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        return (
                            <div className="col-md-8">
                                <div data-aos='fade-up' className="project img d-flex justify-content-center align-items-center" style={{ background: `url(${thumbnail})` }}>
                                    <div className="overlay"></div>
                                    <div className="text text-center p-4">
                                        <h3><a href="#">{title}</a></h3>
                                        <span>Web Design</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}


                </div>
            </div>
        </section>
    )
}

export default SectionProjects