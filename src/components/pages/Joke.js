import React from 'react'
import axios from 'axios'

import Storage from '../../lib/Storage'

class FindJoke extends React.Component {
  constructor() {
    super()
    this.state = {
      jokeinfo: {},
      activeStar: false
    }

    this.getNewJoke = this.getNewJoke.bind(this)
    this.toggleSave = this.toggleSave.bind(this)
  }

  componentDidMount() {
    axios.get('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json'
      }})
      .then(res => this.setState({ jokeinfo: res.data }))
  }

  getNewJoke() {
    this.setState({ joke: 'Loading...', activeStar: false })
    axios.get('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json'
      }})
      .then(res => this.setState({ jokeinfo: res.data }))
  }

  toggleSave() {
    // Search for Jokes saved in local storage
    let jokesSaved = Storage.getJokes()
    //if there are no saved jokes.
    if(jokesSaved === null || jokesSaved.length === 0) {
      // Save the joke in state.
      const jokesSaved = []
      jokesSaved[0] = this.state.jokeinfo
      Storage.setJokes(jokesSaved)
      // if the last joke is not the one in state..
    } else if (jokesSaved[jokesSaved.length - 1].id !== this.state.jokeinfo.id) {
      // save it
      jokesSaved = [...jokesSaved, this.state.jokeinfo]
      localStorage.clear()
      Storage.setJokes(jokesSaved)
      // otherwise remove the last saved joke.
    } else {
      // if the last joke IS this - one remove it.
      jokesSaved.pop()
      localStorage.clear()
      Storage.setJokes(jokesSaved)
    }
    // toggleStar color
    this.setState({ activeStar: !this.state.activeStar })
    console.log(Storage.getJokes())
  }

  render() {
    return (
      <div id='find'>
        <h2>🙄 lets have it then dad..</h2>
        <button onClick={this.getNewJoke}>prompt him for a joke</button>
        <p>
          <i className="fas fa-quote-left"></i>
          <br /><br />
          {this.state.jokeinfo.joke}
          <br /><br />
          <i className="fas fa-quote-right"></i>
        </p>
        <h3 onClick={this.toggleSave}>
          save for later
          <span className={this.state.activeStar ? 'toggleStar': null}>
            <i className="fas fa-star"></i>
          </span>
        </h3>
      </div>
    )
  }
}
export default FindJoke
