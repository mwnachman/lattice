/* global process:false */
import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import axios from 'axios'
import { CssBaseline } from '@material-ui/core'

import MovieDetail from './MovieDetail.jsx'
import Navbar from './Navbar.jsx'
import Popular from './Popular.jsx'
import { getFromLocalStorage, addToLocalStorage } from '../utils/helpers'
import * as config from '../../config/server.json'

const APIRoot = config.BASE_URL[process.env.NODE_ENV || 'development']

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      genres: [],
      selectedMovie: null
    }
    this.addMovie = this.addMovie.bind(this)
    this.selectMovie = this.selectMovie.bind(this)
  }

  componentDidMount() {
    this.fetchPopularMovies()

    const genres = getFromLocalStorage('genres')
    if (genres) this.setState({ genres })
    else this.fetchGenres()
  }

  async fetchPopularMovies() {
    const promise = await axios.get(`${APIRoot}/movie/popular`)
    const status = promise.status
    if (status == 200) {
      const movies = promise.data
      this.savePopularMovies(movies)
    }
  }

  async fetchGenres() {
    const promise = await axios.get(`${APIRoot}/movie/genres`)
    const status = promise.status
    if (status == 200) {
      const data = promise.data
      this.saveGenres(data)
    }
  }

  savePopularMovies(movies) {
    this.setState({ movies })
  }

  saveGenres(genres) {
    this.setState({ genres })
    addToLocalStorage('genres', genres)
  }

  addMovie(value) {
    if (!this.state.movies.filter(movie => movie.id == value.id).length) {
      this.setState({ movies: [value, ...this.state.movies] })
    }
  }

  selectMovie(selectedMovie) {
    this.setState({ selectedMovie })
  }

  render() {
    const { movies, genres, selectedMovie } = this.state
    return (
      <Router>
        <CssBaseline />
        <Navbar addMovie={this.addMovie}/>
        <Switch>
          <Route path='/popular' render={() => (
            <Popular movies={movies}
                     selectMovie={this.selectMovie}
                     genres={genres}/>
            )}/>
          <Route path='/details' render={() => (
            <MovieDetail movie={selectedMovie}/>)}/>
          <Route path="*" component={() => <Redirect to="/popular"/>}/>
        </Switch>
      </Router>
    )
  }
}

export default App
