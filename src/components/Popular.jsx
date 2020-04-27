import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
import {
  LinearProgress,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core'

import { getGenreNameString } from '../utils/helpers'
import useStyles from '../style/popular'

const columns = [
  { id: 'name', label: 'Movie Title', minWidth: 170 },
  { id: 'genre', label: 'Genre', minWidth: 100 }
]

const Popular = ({ movies, selectMovie, genres }) => {
  const styles = useStyles();

  if (movies && genres) {
    return (
      <Paper className={styles.root}>
        <TableContainer className={styles.container}>
          <Table aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell className={styles.header}
                             key={column.id}
                             style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {movies.map(movie => (
                <TableRow key={movie.id}>
                  <TableCell key={movie.title}>
                    <Link className={styles.link}
                          onClick={() => selectMovie(movie)}
                          component={RouterLink}
                          to='/details'>
                      {movie.title}
                    </Link>
                  </TableCell>
                  <TableCell key={movie.id}>
                    {movie.genre_ids.length ?
                      getGenreNameString(movie.genre_ids, genres) : 'n/a'
                    }
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    )
  } return <LinearProgress />
}
Popular.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  selectMovie: PropTypes.func,
  genres: PropTypes.arrayOf(PropTypes.object)
}

export default Popular
