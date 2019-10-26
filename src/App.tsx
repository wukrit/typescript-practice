import React from "react"
import { Route } from "react-router-dom"
import Nav from "./Components/Nav"
import { AboutContainer, BlogContainer, PortfolioContainer, SplashContainer } from "./Containers"

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <Route exact path='/about'>
        <AboutContainer />
      </Route>
      <Route exact path='/blog'>
        <BlogContainer />
      </Route>
      <Route exact path='/portfolio'>
        <PortfolioContainer />
      </Route>
      <Route exact path='/'>
        <SplashContainer />
      </Route>
    </>
  )
}

export default App
