import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import SenatorThumbnail from './SenatorThumbnail'
import Nav from './Nav'

const SenatorContainer = props => {

  return(
    <Fragment>
      <Nav />
    <div>
      <h1>All senators</h1>
    </div>
    <div className= 'senator-grid'>

      { props.senators.senators ?
        props.senators.senators.map(senator => (
        <SenatorThumbnail
        key={ senator.id }
        senator={ senator }/>
      )) : console.log(props.senators) }
    </div>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    senators: state.senators
  }
}

export default connect(mapStateToProps)(SenatorContainer);
