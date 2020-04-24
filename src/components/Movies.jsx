/* global process:false */
import React from 'react'
import axios from 'axios'
import * as config from '../../config/server.json'

const APIRoot = config.BASE_URL[process.env.NODE_ENV || 'development']

class Movies extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
    this.fetchPopularMovies = this.fetchPopularMovies.bind(this)
  }

  async fetchPopularMovies() {
    const promise = await axios.get(`${APIRoot}/popular`)
    const status = promise.status
    if (status == 200) {
      const data = promise.data
      this.setState({ movies: data })
    }
  }

  componentDidMount() {
    this.fetchPopularMovies()
  }

  render() {
    return (
      <div>Lattice</div>
    )
  }
}

export default Movies
