import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Container,
  LinearProgress,
  Link,
  List,
  ListItem
} from '@material-ui/core'

const Popular = ({movies, selectMovie}) => {
  if (movies) {
    return (
      <Container>
        <List>
          {movies.map(movie => (
            <ListItem key={movie.id} onClick={() => selectMovie(movie)}>
              <Link style={{color: 'black'}}
                    component={RouterLink}
                    to='/details'
              >
                {movie.title}
              </Link>
            </ListItem>
          ))}
        </List>
      </Container>
    )
  } return <LinearProgress />
}

export default Popular
