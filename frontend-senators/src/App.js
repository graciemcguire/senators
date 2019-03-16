import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'
import Graph from './Containers/MainContainer/Graph.js'

import { connect } from 'react-redux'
import { setAndFetchUser } from './Redux/actions'

import Nav from './components/Nav'
import Signup from './components/Signup'
import Login from './components/Login'
import Profile from './components/Profile'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route path='/login' component={ Login }/>
          <Route path='/signup' component={ Signup }/>
          <Route path='/profile' component={ Profile }/>
          <Route path='/' component={ Home }/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // user: state.auth.user
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAndFetchUser: (token) => dispatch(setAndFetchUser(token))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
