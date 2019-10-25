import React from 'react'


class SavedJokes extends React.Component {
  constructor() {
    super()
    this.state = {
      jokesSaved: []
    }

  }

  componentDidMount() {
    const jokesSaved = JSON.parse(localStorage.getItem('jokesSaved'))
    this.setState({ jokesSaved: jokesSaved})
  }

  render() {
    return (
      <div id="saved">
        <h2>Dad, what did you say?..</h2>
        {this.state.jokesSaved.map(joke =>
          <p key="joke"> - {joke}</p>
        )}
        <button onClick={this.removeJokes}>not funny dad</button>
      </div>

    )
  }

}
export default SavedJokes
