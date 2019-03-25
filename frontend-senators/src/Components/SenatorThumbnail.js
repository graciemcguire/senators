import React, { Component } from 'react';

class SenatorThumbnail extends Component {


  render(){
    const renderPartyColor = () => {
      if (this.props.senator.party === 'D'){
        return 'senator-card-dem'
      }
      else {
        return 'senator-card-gop'
      }
    }

    const renderUserSenators = () => {
      if (this.props.senator){
        return(
          <div className={ renderPartyColor() }>
            <h2>{ senator.name }</h2>
            <h3>{ senator.party } - { senator.state }</h3>
          </div>
        )
      } else {
        return null
      }
    }
    const { senator } = this.props
    return (
      <div>
        { renderUserSenators() }
      </div>
    )
  }
}

export default SenatorThumbnail
