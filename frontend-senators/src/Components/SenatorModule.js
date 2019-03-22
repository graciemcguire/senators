import React, { Component } from 'react';

class SenatorModule extends Component {
  render(){
    console.log('sen mod', this.props);
    const { senator } = this.props
    return (
      <div>
      <h1>here goes a senator boiii</h1>
      <p>{ /*senator.name*/ }</p>
      </div>
    )
  }
}

export default SenatorModule
