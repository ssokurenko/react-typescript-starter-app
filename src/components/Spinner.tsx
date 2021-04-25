import React from 'react'
import './Spinner.css'

interface Props {
  isVisible?: boolean
  size?: number
}

const Spinner = (props: Props) => {
  const { isVisible = false, size = 24 } = props
  return isVisible ? (
    <div className=" mt-4 mb-4">
      <div
        className={`loader ease-linear rounded-full border-8 border-t-8 border-gray-100 h-${size} w-${size} m-auto`}
      ></div>
    </div>
  ) : null
}

export default Spinner
