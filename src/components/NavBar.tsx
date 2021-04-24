import React from 'react'
import { Link } from 'react-router-dom'

interface RouteLink {
  path: string
  label: string
}

interface Props {
  links: RouteLink[]
}

const NavBar = (props: Props) => {
  const { links } = props
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <Link to={link.path}>
            <li
              key={link.path}
              className="inline-block m-1 p-1 rounded bg-blue-300"
            >
              {link.label}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
