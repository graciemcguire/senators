import React, { Component } from 'react';

class SenatorModule extends Component {
  render(){
    console.log(this.props);
    const { senator } = this.props
    return (
      <div>
      <h1>here goes a senator boi</h1>
      <p>{ senator.name }</p>
      </div>
    )
  }
}

export default SenatorModule
