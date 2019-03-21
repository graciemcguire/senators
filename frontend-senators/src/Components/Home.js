import React, { Component } from 'react';
import MainContainer from './MainContainer'
import Login from './Login'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to='/signup'>Sign Up?</Link>
          <Link to='/login'>Log in ?</Link>
        </header>
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

export default connect(mapStateToProps, null)(Home)
