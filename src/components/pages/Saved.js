import React from 'react'


class SavedJokes extends React.Component {
  constructor() {
    super()
    this.state = {

    }

  }




  render() {
    return (
      <div>
        <p>Dad, what was that one you said the other day?...</p>
        <p></p>
        <button onClick={this.getNewJoke}>Prompt for Joke</button>
      </div>

    )
  }

}
export default SavedJokes
