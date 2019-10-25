import React from 'react'
import axios from 'axios'

class FindJoke extends React.Component {
  constructor() {
    super()
    this.state = {
      joke: ''
    }

    this.getNewJoke = this.getNewJoke.bind(this)
  }

  componentDidMount() {
    this.setState({ joke: 'Loading...'})
    axios.get('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json'
      }})
      .then(res => this.setState({ joke: res.data.joke }))
  }

  getNewJoke() {
    this.setState({ joke: 'Loading...'})
    axios.get('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json'
      }})
      .then(res => this.setState({ joke: res.data.joke }))
  }

  render() {
    return (
      <div>
        <p>Lets have it then dad..</p>
        <p>{this.state.joke}</p>
        <button onClick={this.getNewJoke}>Prompt for Joke</button>
      </div>

    )
  }

}
export default FindJoke
