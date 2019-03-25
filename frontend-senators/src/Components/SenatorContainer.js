import React, { Component } from 'react';
import { connect } from 'react-redux';
import SenatorModule from './SenatorModule'

const SenatorContainer = props => {
  return(
    <div className= 'senator-grid'>
      <h1>All senators</h1>
      { props.senators.senators ? props.senators.senators.map(senator => (
        <SenatorModule key={ senator.id } senator={ senator }/>
      )) : console.log(props.senators.senators) }
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
