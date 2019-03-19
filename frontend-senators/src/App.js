import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'
import Graph from './Containers/MainContainer/Graph.js'

import { connect } from 'react-redux'
import { setAndFetchUser } from './Redux/actions'

import Nav from './Containers/Header/Nav'
import Signup from './Containers/Header/Signup'
import Login from './Containers/Header/Login'
import Profile from './Containers/User/Profile'
import Home from './Containers/MainContainer/Home'

class App extends Component {

  componentDidMount () {
    const token = localStorage.getItem('token')

    if (token) {
      this.props.setAndFetchUser(token)
    }
  }

  // componentDidMount () {
  //   fetch('http://localhost:3001/ap1/v1/senators')
  //   .then(r => r.json())
  //   .then(console.log)
  // }
  //

  render() {
    console.log('in app', this.props);
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
    user: state.auth.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAndFetchUser: (token) => dispatch(setAndFetchUser(token))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
