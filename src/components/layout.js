import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

import "typeface-montserrat"
import "typeface-architects-daughter"
import "typeface-poppins"
import "../styles/main.scss"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <div className="wrapper">
      <Header>Hack horsham</Header>

      <main>{children}</main>

      <footer>© {new Date().getFullYear()}, Hack Horsham</footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
