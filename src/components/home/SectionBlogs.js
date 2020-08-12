import React from "react"
import { Link } from 'gatsby'

const SectionBlogs = ({ data }) => {
    return (
        <section className="ftco-section bg-light" id="blog-section">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-5">
                    <div data-aos='fade-up' className="col-md-7 heading-section text-center">
                        <span className="subheading">Blog</span>
                        <h2 className="mb-4">Our Blog</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    </div>
                </div>
                <div className="row d-flex">
                    {data.map(({ node }, index) => {
                        const title = node.frontmatter.title || node.fields.slug
                        const thumbnail = node.frontmatter.thumbnail ? node.frontmatter.thumbnail.publicURL : ''
                        return (
                            <article className="col-md-4 d-flex" key={index}>
                                <div data-aos='fade-up' data-aos-delay={index*200} className="blog-entry justify-content-end">
                                    <a href="single.html" className="block-20">
                                        <img src={thumbnail} alt={title} />
                                    </a>
                                    <div className="text mt-3 float-right d-block">
                                        <div className="d-flex align-items-center mb-3 meta">
                                            <p className="mb-0">
                                                <span className="mr-2">{node.frontmatter.date}</span>
                                                <a href="#" className="mr-2">Admin</a>
                                                <a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a>
                                            </p>
                                        </div>
                                        <h3 className="heading"><Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                                            {title}
                                        </Link></h3>
                                        <p dangerouslySetInnerHTML={{
                                            __html: node.frontmatter.description || node.excerpt,
                                        }}
                                        />
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default SectionBlogs