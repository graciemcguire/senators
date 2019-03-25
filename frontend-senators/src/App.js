import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { setAndFetchUser, fetchSenators } from './Redux/userActions'

import Nav from './Components/Nav'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Profile from './Components/Profile'
import Home from './Components/Home'
import MainContainer from './Components/MainContainer'
import SenatorContainer from './Components/SenatorContainer'

class App extends Component {

  componentDidMount () {
    console.log('app', this.props.fetchSenators);
    const token = localStorage.getItem('token')

    if (token) {
      this.props.setAndFetchUser(token)
      this.props.fetchSenators(token)
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path='/login' component={ Login }/>
          <Route path='/signup' component={ Signup }/>
          <Route path='/profile' component={ Profile }/>
          <Route path='/senators' component={ SenatorContainer }/>
          <Route path='/main' component={ MainContainer }/>
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
    setAndFetchUser: (token) => dispatch(setAndFetchUser(token)),
    fetchSenators: (token) =>
    dispatch(fetchSenators(token))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
