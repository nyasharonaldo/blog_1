import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Menu from '../components/menu'

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
          <i class="fa fa-home"> </i>
        
        <span class='hide-sm'>
        InvestorConnector
        
        </span>
        </Link>
      </h1>
      <h1 class="nav-title">
        <span>
          <i class="fa fa-balance-scale"></i>
        </span>
      </h1>
      <Menu tags={tags}/>
      
    </nav>
  )
}

export default Header
