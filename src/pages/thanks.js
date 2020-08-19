import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ThanksPage = ({ location }) => (
  <Layout>
    <SEO title="Thank You !" location={location} />
    <div className="main">
      <div className="container" style={{ textAlign: "center", minHeight: "30vh" }}>
        <h1>Thank You !</h1>
        <p>
          We have received your enquiry & will get back to you at the earliest.
        </p>
      </div>
    </div>
  </Layout>
)

export default ThanksPage
