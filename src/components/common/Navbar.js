import React from 'react'
import { Link, withRouter } from 'react-router-dom'


class Navbar extends React.Component {

  constructor() {
    super()

    this.state = {
      navbarOpen: false
    }
  }

  render() {
    return (
      <div id="navbar">
        <h1>Dad Jokes</h1>
        <nav>
          <Link to="/find">Hear Joke</Link>
          <Link to="/saved">Remember Joke</Link>
        </nav>
      </div>
    )
  }
}

export default withRouter(Navbar)
