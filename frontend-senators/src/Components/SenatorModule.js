import React, { Component } from 'react';

class SenatorModule extends Component {


  render(){

    const renderUserSenators = () => {
      if (this.props.senator){
        return(
          <div className= 'senator-card'>
            <h2>{ senator.name }</h2>
            <h3>{ senator.party }</h3>
            <h3>{ senator.state }</h3>
          </div>
        )
      } else {
        return null
      }
    }
    console.log('sen module', this.props);
    const { senator } = this.props
    return (
      <div>
        { renderUserSenators() }
      </div>
    )
  }
}

export default SenatorModule
