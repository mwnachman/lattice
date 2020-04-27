/* global process:false */
import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import {
  ButtonBase,
  Grid,
  LinearProgress,
  Paper,
  Typography
} from '@material-ui/core'

import useStyles from '../style/movieDetail'
import { getCastNameString } from '../utils/helpers'
import * as config from '../../config/server.json'

const APIRoot = config.BASE_URL[process.env.NODE_ENV || 'development']

const MovieDetailWrapper = ({ movie }) => {
  const styles = useStyles()
  if (movie) {
    return (
      <MovieDetail movie={movie} styles={styles}/>
    )
  }
  return <Redirect to='/popular'/>
}

const CastNames = ({ cast }) => {
  const names = getCastNameString(cast)
  return(
    <React.Fragment>
      Cast: {names}
    </React.Fragment>
  )
}

class MovieDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      credits: null
    }
  }

  componentDidMount() {
    this.fetchCredits()
  }

  async fetchCredits() {
    const { movie } = this.props
    const promise = await axios.get(`${APIRoot}/movie/${movie.id}/credits`)
    const status = promise.status
    if (status == 200) {
      const credits = promise.data
      this.saveCredits(credits)
    }
  }

  saveCredits(credits) {
    this.setState({ credits })
  }

  render() {
    const { credits } = this.state
    const { styles, movie } = this.props
    const releaseYear = movie.release_date.slice(0,4)
    const releaseText = parseInt(releaseYear) > 2020 ? 'Expected Release' : 'Released'
    if (credits) {
      return (
        <div className={styles.root}>
          <Paper className={styles.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={styles.image}>
                  <img className={styles.img} src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}/>
                </ButtonBase>
              </Grid>
              <Grid item xs={12} 
                    sm container>
                <Grid item xs
                      container
                      direction='column' 
                      spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant='subtitle1'>
                      {movie.title}
                    </Typography>
                    <Typography variant='body2' gutterBottom>
                      <CastNames cast={credits.cast}/>
                    </Typography>
                    <Typography variant='body2'
                                className={styles.overview} 
                                color='textSecondary'>
                      {movie.overview}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant='body2'>
                      {releaseText}: {releaseYear}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      )
    } return <LinearProgress />

  }
}

export default MovieDetailWrapper
