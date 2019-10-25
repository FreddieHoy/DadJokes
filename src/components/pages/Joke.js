import React from 'react'
import axios from 'axios'

class FindJoke extends React.Component {
  constructor() {
    super()
    this.state = {
      joke: ''
    }

    this.getNewJoke = this.getNewJoke.bind(this)
    this.saveForLater = this.saveForLater.bind(this)
  }

  // componentDidMount() {
  //
  //   } else console.log(localStorage.getItem('jokesSaved'))
  // }

  getNewJoke() {
    this.setState({ joke: 'Loading...'})
    axios.get('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json'
      }})
      .then(res => this.setState({ joke: res.data.joke }))
  }

  saveForLater() {
    // create local storage if it doesn't exsist
    if(localStorage.getItem('jokesSaved') === null) {

      const jokesSaved = []
      jokesSaved[0] = this.state.joke

      localStorage.setItem('jokesSaved', JSON.stringify(jokesSaved))
    } else {
    // get jokesSaved
      let jokesSaved = JSON.parse(localStorage.getItem('jokesSaved'))

      //pop new joke in
      jokesSaved = [...jokesSaved, this.state.joke]
      console.log(jokesSaved)

      // clear localstorage
      localStorage.clear()
      // resave Joked Saved
      localStorage.setItem('jokesSaved', JSON.stringify(jokesSaved))
    }

  }

  render() {
    return (
      <div id='find'>
        <h2>🙄 lets have it then dad..</h2>

        <button onClick={this.getNewJoke}>prompt him for a joke</button>

        <p>
          <i className="fas fa-quote-left"></i>
          <br /><br />
          {this.state.joke}this is my joke, lets see how if fits on the page - how good.
          <br /><br />
          <i className="fas fa-quote-right"></i>
        </p>

        <h3 onClick={this.saveForLater}>save for later <i className="fas fa-star"></i></h3>

      </div>

    )
  }

}
export default FindJoke
