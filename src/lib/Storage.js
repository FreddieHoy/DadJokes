
class Storage {
  static getJokes() {
    return JSON.parse(localStorage.getItem('jokesSaved'))
  }

  static setJokes(jokesSaved) {
    localStorage.setItem('jokesSaved', JSON.stringify(jokesSaved))
  }

}

export default Storage
