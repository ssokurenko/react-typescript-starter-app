import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faParachuteBox } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'
import { RouteLink } from '../interfaces'

interface Props {
  height?: string
  appName?: string
  appMotto?: string
  links?: RouteLink[]
}

const HeroSection = (props: Props) => {
  const { height = '20rem', appName, appMotto, links = [] } = props
  return (
    <section
      className="flex items-center justify-center bg-gray-800"
      style={{ height }}
    >
      <div className="text-center">
        <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">
          <FontAwesomeIcon icon={faParachuteBox} />
          &nbsp;{appName}
        </h2>
        <p className="mt-6 text-xl font-medium tracking-wider text-gray-300">
          {appMotto}
        </p>
        <div className="flex justify-center mt-8 ml-2 mr-2">
          {links.map((link) => (
            <Button link={link.path}>{link.label}</Button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
