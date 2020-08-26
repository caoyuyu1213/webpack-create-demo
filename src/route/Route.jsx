import React from 'react'
import App from '../App'
import Menu from '../Component/Menu'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

const ProdRoute = (
  <Router>
    <Switch>
      <Route exact component={Menu} path="/menu" />
      <Route component={App} path="/home" />
      <Redirect from="/" to="/home" />
    </Switch>
  </Router>
)

export default ProdRoute
