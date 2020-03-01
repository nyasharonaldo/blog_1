import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `)

  const tags = Array.from(
    new Set(
      data.allMarkdownRemark.edges.map(({ node }) => {
        return node.frontmatter.tags[0]
      })
    )
  )
  console.log(tags)
  return (
    <nav class="navbar bg-dark">
      <h1>
        <Link to="/">
          <i class="fa fa-home"> </i>InvestorConnector
        </Link>
      </h1>
      <h1 class="nav-title">
        <span>
          <i class="fa fa-balance-scale"></i>
        </span>
      </h1>
      
      <div className="menu-bar">
        <ul>
          <li tab-index="0">
            <i class="fa fa-bars menu-icon "></i>
            
            <ul>
            <li>
            <Link to='/#blog-grid' >Blog Posts</Link>
            </li>
              {tags.map(tag => {
                return (
                  <li>
                    <Link to={tag}>{tag}</Link>
                  </li>
                )
              })}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
