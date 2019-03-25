import React, { Component } from 'react';
import { connect } from 'react-redux';
import SenatorThumbnail from './SenatorThumbnail'

const SenatorContainer = props => {
  return(
    <div>
      <h1>All senators</h1>
    <div className= 'senator-grid'>

      { props.senators.senators ? props.senators.senators.map(senator => (
        <SenatorThumbnail key={ senator.id } senator={ senator }/>
      )) : console.log(props.senators.senators) }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    senators: state.senators
  }
}

export default connect(mapStateToProps)(SenatorContainer);
