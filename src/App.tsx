import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useConfig } from './hooks'
import { Header, Footer, HeroSection } from './components'
import { AboutPage, NotFoundPage, DemoApiPage, TemplatePage } from './pages'

const App = () => {
  const {
    appName,
    appMotto,
    headerLinks,
    heroLinks,
    footerLinks,
    copyright
  } = useConfig()

  return (
    <Router>
      <>
        <Header logo={appName} links={headerLinks} />
        <Switch>
          <Route path="/" exact>
            <HeroSection
              appName={appName}
              appMotto={appMotto}
              links={heroLinks}
            />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/template-page" exact>
            <TemplatePage />
          </Route>
          <Route path="/api-demo" exact>
            <DemoApiPage />
          </Route>
          <Route path="/">
            <NotFoundPage />
          </Route>
        </Switch>
        <Footer copyright={copyright} links={footerLinks} />
      </>
    </Router>
  )
}

export default App
