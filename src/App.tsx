import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useConfig } from './hooks'
import { Header, Footer } from './components'
import { HomePage, AboutPage, NotFoundPage, TemplatePage } from './pages'

const App = () => {
  const { appName, headerLinks, footerLinks, copyright } = useConfig()

  return (
    <Router>
      <>
        <Header logo={appName} links={headerLinks} />
        <div className="container mx-auto px-4 mt-6 mb-6">
          <Switch>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/template-page" exact>
              <TemplatePage />
            </Route>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/">
              <NotFoundPage />
            </Route>
          </Switch>
        </div>
        <Footer copyright={copyright} links={footerLinks} />
      </>
    </Router>
  )
}

export default App
