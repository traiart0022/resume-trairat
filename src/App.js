import React, { Component } from 'react'
import Content from "./Content/ComponentOverview"
import FristPage from "./FristPage/ComponentLogin"
import Doc from "./DocFinalprojeect/ComponentDoc"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={FristPage} />
            <Route path='/ComponentOverview' component={Content} />
            <Route path='/Doc' component={Doc} />
          </Switch>
        </Router>
      </div>
    )
  }
}
