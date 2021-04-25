import React, { useState, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { RouteLink } from '../interfaces'

interface Props {
  logo: ReactNode
  links: RouteLink[]
}

const Header = (props: Props) => {
  const { logo, links } = props
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const getButtonClass = (isFeatured: boolean = false) =>
    isFeatured
      ? 'px-4 py-1 text-sm font-medium text-center text-gray-200 transition-colors duration-300 transform border rounded hover:bg-indigo-400'
      : 'text-sm font-medium text-center text-gray-200 transition-colors duration-300 transform hover:text-indigo-400'

  return (
    <header className="bg-gray-800">
      <nav className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-xl font-bold text-white transition-colors duration-300 transform md:text-2xl hover:text-indigo-400"
          >
            {logo}
          </Link>
          <div
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex md:hidden"
          >
            <button
              type="button"
              className="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`${
            isMobileMenuOpen ? 'flex' : 'hidden'
          } flex-col mt-2 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0`}
        >
          {links.map((link) => (
            <Link
              to={link.path}
              className={getButtonClass(link.isFeatured)}
              key={link.path}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header
