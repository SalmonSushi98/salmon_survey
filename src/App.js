import React from 'react'
import './App.css'
import { HashRouter, Route } from 'react-router-dom'
import Home from './routes/Home'
import Terms from './routes/Terms'
import Survey01 from './routes/Survey01'
import ResultPage from './routes/ResultPage'

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/terms" component={Terms} />
      <Route path="/survey01" component={Survey01} />
      <Route path="/result" component={ResultPage} />
    </HashRouter>
  )
}

export default App;