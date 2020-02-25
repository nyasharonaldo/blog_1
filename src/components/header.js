import React from "react"
import  {Link } from "gatsby"
const Header = ({ location }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  console.log(location.pathname)
  
  return (
    <nav class="navbar bg-dark">
      <h1>
        <Link>
          InvestorConnector
        </Link>
      </h1>
      <h1><i class="fa fa-balance-scale"></i></h1>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/forex">Equities</Link>
        </li>
        <li>
          <Link to="/fixed-income">Fixed Income</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
