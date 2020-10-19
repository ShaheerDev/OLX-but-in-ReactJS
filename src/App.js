//Recommended Resolution is 1920x1080p

//I have made the App.js file the router config

import React from 'react';
import './App.css';
import firebase from 'firebase'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/home'
import Createadd from './components/createadd'
import Signup from './components/Signup'
import Postform from './components/postform'
import Loggedhome from './components/loggedhome.js'

export default class App extends React.Component {
    render(){
    return(
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/createadd' component={Createadd} />
        <Route path='/signup' component={Signup} />
        <Route path='/postform' component={Postform} />
        <Route path='/loggedhome' component={Loggedhome} />
      </Router>
    )
  }
}
