import React from 'react'


class SavedJokes extends React.Component {
  constructor() {
    super()
    this.state = {
      jokesSaved: []
    }

    this.removeJokes = this.removeJokes.bind(this)
  }

  componentDidMount() {
    let jokesSaved
    if(localStorage.getItem('jokesSaved') === null) {
      jokesSaved = ['none saved']
    } else {
      jokesSaved = JSON.parse(localStorage.getItem('jokesSaved'))
    }
    this.setState({ jokesSaved: jokesSaved})
  }

  removeJokes() {
    localStorage.clear()
    const jokesSaved = []
    this.setState({ jokesSaved: jokesSaved})
  }

  render() {
    return (
      <div id="saved">
        <h2>Dad, what did you say?..</h2>
        {this.state.jokesSaved.map(jokeinfo =>
          <p key={jokeinfo.id}> - {jokeinfo.joke}</p>
        )}
        <button onClick={this.removeJokes}>{'DAD YOU\'RE NOT FUNNY!'}</button>
      </div>
    )
  }

}
export default SavedJokes
