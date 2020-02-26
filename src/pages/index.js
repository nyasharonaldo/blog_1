import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

export function getTagLink(tag) {
  if (tag == "Stocks & Shares") {
    return "stocks-shares"
  } else if (tag == "Fixed Income") {
    return "fixed-income"
  } else if (tag == "Cryptocurrency") {
    return "crypto"
  } else {
    return "general"
  }
}

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <section class="landing">
        <div class="dark-overlay">
          <div class="landing-inner">
            <div style={{ display: `flex` }}>
              <h1 class="x-large">Notre</h1>
              <h3>Studios</h3>
            </div>
            <p class="lead">Share & Learn new Investment Techniques</p>
            <div class="buttons">
              <Link to="#blog-grid" class="btn btn-primary">
                View Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="blog-grid" class="container">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const tag = node.frontmatter.tags
          const tagLink = getTagLink(tag)
          return (
            <article class="box" key={node.fields.slug}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <Link to={tagLink}>
                  {" "}
                  <small>{node.frontmatter.tags}</small>
                </Link>

                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
            tags
          }
        }
      }
    }
  }
`
