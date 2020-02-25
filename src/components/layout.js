import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "font-awesome/css/font-awesome.min.css"
import "../../dist/css/style.css"
import Header from "./header"
import { Helmet } from "react-helmet"

const Layout = ({ location, children }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </Helmet>
      <Header location={location}siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer class="container">
          © {new Date().getFullYear()}, Built by
          {` `}
          <strong>Notre Studios</strong>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
