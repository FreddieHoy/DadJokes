class Storage {
  static setToken(token) {
    localStorage.setItem('token', token)
  }

  static setUser(user) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  static getToken() {
    return localStorage.getItem('token')
  }

  static getUser() {
    return JSON.parse(localStorage.getItem('user') || '{}')
  }

  static removeToken() {
    localStorage.removeItem('token')
  }

  static removeUser() {
    localStorage.removeItem('user')
  }

}

export default Storage
