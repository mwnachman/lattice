/* global process:false */
import React from 'react'
import axios from 'axios'
import {
  AppBar,
  IconButton,
  InputBase,
  MenuItem,
  Paper,
  Popper,
  Toolbar,
  Typography
} from '@material-ui/core'
import MovieIcon from '@material-ui/icons/Movie'
import SearchIcon from '@material-ui/icons/Search'

import * as config from '../../config/server.json'

const APIRoot = config.BASE_URL[process.env.NODE_ENV || 'development']

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      searchResults: []
    }
    this.query = this.query.bind(this)
  }

  async query({target: {value}}) {
    this.handleChange(value)
    if (value.length) {
      const promise = await axios.get(`${APIRoot}/search/movie/${value}`)
      const status = promise.status
      if (status == 200) {
        const data = promise.data
        this.setState({ searchResults: data.slice(0,8) })
      }
    }
  }

  handleChange(searchTerm) {
    this.setState({searchTerm})
  }

  render() {
    const { styles } = this.props
    const { searchTerm, searchResults } = this.state
    const open = searchTerm.length > 0
    return (
      <div className={styles.grow}>
        <AppBar className={styles.beige} position='static'>
          <Toolbar>
            <IconButton edge='start'>
              <MovieIcon />
            </IconButton>
            <Typography className={styles.title}
                        variant='h6'
                        noWrap>
              Lattice Movie Database
            </Typography>
            <div className={styles.search}>
              <div className={styles.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder='Search...'
                         id='search-box'
                         autoComplete='off'
                         value={searchTerm}
                         classes={{
                           root: styles.inputRoot,
                           input: styles.inputTypeSearch
                         }}
                         inputProps={{ 'aria-label': 'search' }}
                         onChange={this.query}/>
              <Popper open={open} anchorEl={document.getElementById('search-box')}>
                <Paper className={styles.paper}>
                  {searchResults.map(result => <MenuItem key={result.id}>{result.title}</MenuItem>)}
                </Paper>
              </Popper>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default Navbar
