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

async function getMovieGenres() {
  try {
    const response = await axios({
      method: 'GET',
      url: `${APIRoot}/genre/movie/list?language=en-US`,
      params: {
        api_key: API_KEY
      }
    })
    if (response.status == 200) {
      const genres = response.data.genres
      return genres
    }
  } catch (error) {
    console.error(error)
  }
}

async function getCredits(movieId) {
  try {
    const response = await axios({
      method: 'GET',
      url: `${APIRoot}/movie/${movieId}/credits`,
      params: {
        api_key: API_KEY
      }
    })
    if (response.status == 200) {
      const credits = response.data
      return credits
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
  getMovieGenres,
  getCredits,
  searchMovies
}
