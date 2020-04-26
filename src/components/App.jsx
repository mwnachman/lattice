import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'

import MovieDetail from './MovieDetail.jsx'
import Navbar from './Navbar.jsx'
import Popular from './Popular.jsx'
import useNavbarStyles from '../style/navbar'

const App = () => {
  const navbarClasses = useNavbarStyles()
  return (
    <Router>
      <CssBaseline />
      <Navbar styles={navbarClasses}/>
      <Switch>
        <Route exact path="/"
               component={() => <Redirect to="/popular"/>}/>
        <Route path='/popular' component={Popular}/>
        <Route path='/details' component={MovieDetail}/>
      </Switch>
    </Router>
  )
}

export default App
