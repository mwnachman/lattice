import React from 'react'
import {
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  Typography
} from '@material-ui/core'
import MovieIcon from '@material-ui/icons/Movie'
import SearchIcon from '@material-ui/icons/Search'

import useStyles from '../style/navbar'

const Navbar = () => {
  const classes = useStyles()
  return (
    <div className={classes.grow}>
      <AppBar className={classes.beige} position='static'>
        <Toolbar>
          <IconButton edge='start'>
            <MovieIcon />
          </IconButton>
          <Typography className={classes.title}
                      variant='h6'
                      noWrap>
            Lattice Movie Database
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase placeholder='Search...'
                       classes={{
                         root: classes.inputRoot,
                         input: classes.inputInput
                       }}
                       inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
