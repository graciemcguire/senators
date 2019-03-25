import React, { Component } from 'react';
import { connect } from 'react-redux'
import SenatorThumbnail from './SenatorThumbnail'
import Nav from './Nav'

class MainContainer extends Component {

  mapSenators = () => {

  }


  render(){
    console.log('main', this.props);
    return(
      <div>
        <h1>hi i'm in the main area</h1>
        <SenatorThumbnail />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}
//
// const mapDispatchToProps = dispatch => {
//   action: () => dispatch(action())
// }

export default connect(mapStateToProps)(MainContainer)
