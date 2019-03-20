import React, { Component } from 'react';
import MainContainer from './MainContainer'
import Login from './Login'

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

export default Home;
