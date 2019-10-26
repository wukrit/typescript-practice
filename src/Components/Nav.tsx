import React from "react"
import { NavLink } from "react-router-dom"
import "../CSS/Nav.css"

const Nav: React.FC = props => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/blog'>Blog</NavLink>
        </li>
        <li>
          <NavLink to='/portfolio'>Portfolio</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
