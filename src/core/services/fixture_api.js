export default {
  // Functions return fixtures
  postLogin:      ( user, password ) => {
    const data = require('../../fixtures/user.json')
    return {
      ok:   true,
      data: data
    }
  },
  getProfile:     () => {
    const data = require('../../fixtures/profile.json')
    return {
      ok:   true,
      data: data
    }
  }
}
