import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faParachuteBox } from '@fortawesome/free-solid-svg-icons'
import { useConfig } from './hooks'

const App = () => {
  const { appName, appMotto, primaryColor } = useConfig()
  return (
    <div>
      <div className="p-6 m-4 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
          <FontAwesomeIcon
            icon={faParachuteBox}
            size="2x"
            color={primaryColor}
          />
        </div>
        <div>
          <div className="text-xl font-medium text-black">{appName}</div>
          <p className="text-gray-500">{appMotto}</p>
        </div>
      </div>
    </div>
  )
}

export default App
