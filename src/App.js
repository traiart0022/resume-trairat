import React, { Component } from 'react'
import Content from "./Content/ComponentOverview"
import FristPage from "./FristPage/ComponentLogin"
import Doc from "./DocFinalprojeect/ComponentDoc"
/* import INTRODUSEMYSELF from "./Content/ComponentINTRODUSE_MYSELF"
import EDUCATION from "./Content/ComponentEDUCATION"
import SKILL from "./Content/ComponentSKILL"
import EXPERIENCE from "./Content/ComponentEXPERIENCE"
import PORTFOLIO from "./Content/ComponentPORTFOLIO" */
import {
  BrowserRouter as 
  Switch,
  Route,
} from 'react-router-dom'

export default class App extends Component {
  render() {

    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={FristPage} />
          <Route path='/ComponentOverview' component={Content} />
          <Route path='/Doc' component={Doc} />
        </Switch>
      </div>
    )

    return (


      <div>
        <Switch>
          <App />
        </Switch>
      </div>


      // <div>
      //   <Router>
      //     <Switch>
      //       <Route exact path='/' component={FristPage} />
      //       <Route path='/ComponentOverview' component={Content} />
      //       <Route path='/Doc' component={Doc} />
      //       {/* <Route path='/INTRODUSEMYSELF' component={INTRODUSEMYSELF} />
      //       <Route path='/EDUCATION' component={EDUCATION} />
      //       <Route path='/SKILL' component={SKILL} />
      //       <Route path='/EXPERIENCE' component={EXPERIENCE} />
      //       <Route path='/PORTFOLIO' component={PORTFOLIO} /> */}
      //     </Switch>
      //   </Router>
      // </div>
    )
  }
}
