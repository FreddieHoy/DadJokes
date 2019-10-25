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
        <h1>dad jokes</h1>
        <nav>
          <Link to="/find">hear new jokes</Link>
          <Link to="/saved">remember old jokes</Link>
        </nav>
      </div>
    )
  }
}

export default withRouter(Navbar)
