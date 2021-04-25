import React from 'react'
import { Link } from 'react-router-dom'
import { RouteLink } from '../interfaces'

interface Props {
  height?: string
  appName?: string
  appMotto?: string
  links?: RouteLink[]
}

const HeroSection = (props: Props) => {
  const { height = '300px', appName, appMotto, links = [] } = props
  return (
    <section
      className="flex items-center justify-center bg-gray-800"
      style={{ height }}
    >
      <div className="text-center">
        <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">
          {appName}
        </h2>
        <p className="mt-6 text-xl font-medium tracking-wider text-gray-300">
          {appMotto}
        </p>

        <div className="flex justify-center mt-8 ml-2 mr-2">
          {links.map((link) => (
            <Link
              to={link.path}
              className="px-8 py-2 ml-2 mr-2 text-lg font-medium text-white transition-colors duration-300 transform bg-indigo-600 rounded hover:bg-indigo-500"
              key={link.path}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
