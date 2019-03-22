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
        <div className = 'main-buttons'>
          <Link to='/signup' >
            <button className='button'>Sign Up</button>
          </Link>
          <Link to='/login'>
            <button className='button'>Login</button>
          </Link>
        </div>
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
