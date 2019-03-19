import React, { Component } from 'react';
import { connect } from 'react-redux'
import SenatorModule from './SenatorModule'

class Graph extends Component {
  render(){
    console.log('main', this.props);
    return(
      <div>
        <h1>hi i'm in the main area</h1>
        <SenatorModule />
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

export default connect(mapStateToProps)(Graph)
