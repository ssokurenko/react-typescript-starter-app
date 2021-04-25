import React, { ReactNode } from 'react'
import { RouteLink } from '../interfaces'
import { Link } from 'react-router-dom'

interface Props {
  copyright?: ReactNode
  links?: RouteLink[]
}

const Footer = (props: Props) => {
  const { copyright, links = [] } = props
  return (
    <footer className="border-t">
      <div className="container flex items-center justify-between px-6 py-8 mx-auto">
        <p className="text-gray-500">{copyright}</p>
        <p className="font-medium text-gray-700">
          {links.map((link) => (
            <Link
              to={link.path}
              className="mr-4 hover:underline"
              key={link.path}
            >
              {link.label}
            </Link>
          ))}
        </p>
      </div>
    </footer>
  )
}

export default Footer
