import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter, Route, Switch } from 'react-router-dom'
import FindJoke from './components/pages/Joke'
import SavedJokes from './components/pages/Saved'
import Navbar from './components/common/Navbar'

import './style.scss'

class App extends React.Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Navbar />
          <Switch>
            <Route path="/saved" component={SavedJokes} />
            <Route path="/" component={FindJoke} />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
