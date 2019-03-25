import React, { Component } from 'react';
import { connect } from 'react-redux';
import SenatorModule from './SenatorModule'

const SenatorContainer = props => {
  return(
    <div>
      <h1>working?</h1>
      {props.senator ? props.senators.map(senator => (
        <SenatorModule key={ senator.id } senator={ senator }/>
      )) : 'loading' }
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
