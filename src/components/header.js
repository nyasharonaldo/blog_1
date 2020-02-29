import React from "react"
import { Dropdown } from "react"
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
        <Link to="/">InvestorConnector</Link>
      </h1>
      <h1>
        <i class="fa fa-balance-scale"></i>
      </h1>
      <ul>
        {tags.map(tag => {
          return (
            <li>
              <Link to={tag}>{tag}</Link>
            </li>
          )
        })}
      </ul>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  )
}

export default Header
