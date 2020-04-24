const config = require('../config/server.json')
const axios = require('axios')

const APIRoot = config.movieDatabase.MOVIE_URL
const API_KEY = config.movieDatabase.API_KEY

async function getPopularMovies() {
    try {
      const response = await axios.get(`${APIRoot}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      if (response.status == 200) {
        const data = response.data
        return data
      }
    } catch (error) {
      console.error(error)
    }
}

module.exports = {
  getPopularMovies
}
