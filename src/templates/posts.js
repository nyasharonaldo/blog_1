import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogPostTemplate = ({ data }) => {
  console.log(data)
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Fixed Income blog posts" />
      <section id="blog-grid" class="container">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const tagLink = node.frontmatter.tags
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

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByTags($tags: String!) {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(
      filter: { frontmatter: { tags: { eq: $tags} } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
