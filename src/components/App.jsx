import React from 'react'
import { CssBaseline, Container } from '@material-ui/core'

import Navbar from './Navbar.jsx'
import Movies from './Movies.jsx'
import useNavbarStyles from '../style/navbar'

const App = () => {
  const navbarClasses = useNavbarStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar styles={navbarClasses}/>
      <Container>
        <Movies/>
      </Container>
    </React.Fragment>
  )
}

export default App
