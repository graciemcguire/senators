import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import wokeorjoke_v1 from '../wokeorjoke_v1.svg'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

        <div className='logo-main'>
          <img src= { wokeorjoke_v1 } alt='logo'/>
        </div>

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
    user: state.auth.user
  }
}

export default connect(mapStateToProps, null)(Home)
