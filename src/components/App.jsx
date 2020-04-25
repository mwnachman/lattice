import React from 'react'
import { CssBaseline, Container } from '@material-ui/core'

import Navbar from './Navbar.jsx'
import Movies from './Movies.jsx'

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Container>
        <Movies/>
      </Container>
    </React.Fragment>
  )
}

export default App
