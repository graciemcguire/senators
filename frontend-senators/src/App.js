import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { setAndFetchUser, fetchSenators } from './Redux/userActions'

import Signup from './Components/Signup'
import Login from './Components/Login'
import Profile from './Components/Profile'
import Home from './Components/Home'
import MainContainer from './Components/MainContainer'
import SenatorContainer from './Components/SenatorContainer'
import Logout from './Components/Logout'
import TestSwipe from './Components/TestSwipe'

class App extends Component {

  componentDidMount () {
    const token = localStorage.getItem('token')

    if (token) {
      this.props.setAndFetchUser(token)
      this.props.fetchSenators(token)
    }
  }

  noUser = () => {
    const token = localStorage.getItem('token')
    if (token) {
      return <Switch>
        <Route path='/profile' component={ Profile }/>
        <Route path='/login' component={ Login }/>
        <Route path='/signup' component={ Signup }/>
        <Route path='/senators' component={ SenatorContainer }/>
        <Route path='/main' component={ MainContainer }/>
        <Route path='/logout' component={ Logout }/>
        <Route path='/test' component={ TestSwipe }/>
        <Route path='/' component={ Home }/>
      </Switch>
    } else {
      return <Switch>
        <Route path='/login' component={ Login }/>
        <Route path='/signup' component={ Signup }/>
        <Route path='/' component={ Home }/>
      </Switch>
    }
  }

  render() {
    return (
      <div>
        { this.noUser() }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    senators: state.senators
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
