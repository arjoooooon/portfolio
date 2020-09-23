import React from "react"
import { Link } from "gatsby"
import Header from './Header'
import Footer from './Footer'
import { Container } from 'react-bootstrap';
import "../assets/scss/app.scss"
import '../styles/index.css'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  // if (location.pathname === rootPath) {

  // } else {

  // }
  return (
    <>
      <Header />
      <main style={{fontFamily: 'proxima nova'}}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
