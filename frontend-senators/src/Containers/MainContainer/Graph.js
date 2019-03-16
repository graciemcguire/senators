import React, { Component } from 'react';
import { connect } from 'react-redux'
import SenatorThumbnail from './SenatorThumbnail'

class Graph extends Component {
  render(){
    console.log('graph', this.props);
    return(
      <div>
        <h1>hi i'm in the graph area</h1>
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

export default connect(mapStateToProps)(Graph)
