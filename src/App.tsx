import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Nav from "./Components/Nav"
import "./CSS/App.css"

const App: React.FC = () => {
  return (
    <div className='App'>
      <Nav />
    </div>
  )
}

export default App
