/* global process:false */
import React from 'react'
import axios from 'axios'
import { Box, List, ListItem } from '@material-ui/core'

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

  componentDidMount() {
    this.fetchPopularMovies()
  }

  async fetchPopularMovies() {
    const promise = await axios.get(`${APIRoot}/popular`)
    const status = promise.status
    if (status == 200) {
      const data = promise.data
      this.setState({ movies: data })
    }
  }

  render() {
    const {movies} = this.state
    return (
      <Box>
        <List>
        {movies.map(movie => {
          return (
            <ListItem key={movie.title}>{movie.title}</ListItem>
          )
        })}
        </List>
      </Box>
    )
  }
}

export default Movies
