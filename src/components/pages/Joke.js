import React from 'react'
import axios from 'axios'

class FindJoke extends React.Component {
  constructor() {
    super()
    this.state = {
      jokeinfo: {}

    }

    this.createNewJoke = this.createNewJoke.bind(this)
  }

  componentDidMount() {
    this.setState({ joke: 'Loading...'})
    axios.get('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json'
      }})
      .then(res => this.setState({ joke: res.data.joke }))
  }

  createNewJoke() {
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
        <h1>Dad Jokes</h1>
        <p>Lets have it then dad..</p>
        <p>{this.state.joke}</p>
        <button onClick={this.createNewJoke}>Prompt for Joke</button>
      </div>

    )
  }

}
export default FindJoke
