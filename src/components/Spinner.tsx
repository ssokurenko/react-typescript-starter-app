import React from 'react'
import './Spinner.css'

interface Props {
  isVisible?: boolean
  size?: number
}

const Spinner = (props: Props) => {
  const { isVisible = false, size = 80 } = props
  return isVisible ? (
    <div className=" mt-4 mb-4">
      <div
        style={{ width: `${size}px`, height: `${size}px` }}
        className={`loader ease-linear rounded-full border-8 border-t-8 border-gray-100 m-auto`}
      ></div>
    </div>
  ) : null
}

export default Spinner
