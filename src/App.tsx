import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faParachuteBox } from '@fortawesome/free-solid-svg-icons'
import { useConfig } from './hooks'
import { Header } from './components'
import { HomePage, AboutPage } from './pages'

const App = () => {
  const { appName, appMotto, primaryColor, navLinks } = useConfig()

  return (
    <Router>
      <>
        <Header logo={appName} links={navLinks} />
        <div className="container mx-auto px-4">
          <div className="p-6 m-4 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div className="flex-shrink-0">
              <FontAwesomeIcon
                icon={faParachuteBox}
                size="3x"
                color={primaryColor}
              />
            </div>
            <div>
              <div className="text-xl font-medium text-black">{appName}</div>
              <p className="text-gray-500">{appMotto}</p>

              <div>
                <Switch>
                  <Route path="/about">
                    <AboutPage />
                  </Route>
                  <Route path="/">
                    <HomePage />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </>
    </Router>
  )
}

export default App
