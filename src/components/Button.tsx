import React, { ReactNode, MouseEvent } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  children: ReactNode
  link?: string
  onClick?: (e?: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
}

const Button = (props: Props) => {
  const { children, link, onClick } = props
  const className =
    'px-8 py-2 ml-2 mr-2 text-lg font-medium text-white transition-colors duration-300 transform bg-indigo-600 rounded hover:bg-indigo-500'
  return link ? (
    <Link to={link} className={className}>
      {children}
    </Link>
  ) : (
    <button className={className} onClick={(e) => onClick && onClick(e)}>
      {children}
    </button>
  )
}

export default Button
