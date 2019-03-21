import React, { Component } from 'react';
import MainContainer from './MainContainer'
import Login from './Login'
import { connect } from 'react-redux'


class Home extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <header className="App-header">
          this will be an app eventually
        </header>
        <MainContainer></MainContainer>
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
