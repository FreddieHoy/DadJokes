import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter, Route, Switch } from 'react-router-dom'
import FindJoke from './components/pages/Joke'

import './style.scss'

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/findjoke/" component={FindJoke} />
        </Switch>
      </HashRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
