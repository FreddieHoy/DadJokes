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
      <div>
        <h1>Dad Jokes</h1>
        <nav>
          <div>
            <Link to="/find">HearJoke </Link>
            <Link to="/saved">Remember Joke</Link>
          </div>
        </nav>
      </div>
    )
  }
}

export default withRouter(Navbar)
