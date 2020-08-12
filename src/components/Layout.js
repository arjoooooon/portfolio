import React from "react"
import { Link } from "gatsby"
import Header from './Header'
import Footer from './Footer'
import { Container } from 'react-bootstrap';
import "../assets/scss/app.scss"
import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  // if (location.pathname === rootPath) {

  // } else {

  // }
  return (
    <>
      <Header />
      <main>
        <Container>{children}</Container></main>
      <Footer />
    </>
  )
}

export default Layout