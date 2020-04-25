const config = require('../config/server.json')
const axios = require('axios')

const APIRoot = config.movieDatabase.MOVIE_URL
const API_KEY = config.movieDatabase.API_KEY

async function getPopularMovies() {
    try {
      const response = await axios({
        method: 'GET',
        url: `${APIRoot}/movie/popular?language=en-US&page=1`,
        params: {
          api_key: API_KEY
        }
      })
      if (response.status == 200) {
        const movies = response.data.results
        return movies
      }
    } catch (error) {
      console.error(error)
    }
}

async function searchMovies(queryString) {
    try {
      const response = await axios({
        method: 'GET',
        url: `${APIRoot}/search/movie?language=en-US&page=1&include_adult=false`,
        params: {
          query: queryString,
          api_key: API_KEY
        }
      })
      if (response.status == 200) {
        const movies = response.data.results
        return movies
      }
    } catch (error) {
      console.error(error)
    }
}

module.exports = {
  getPopularMovies,
  searchMovies
}
