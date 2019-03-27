import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import SenatorThumbnail from './SenatorThumbnail'
import Nav from './Nav'

const SenatorContainer = props => {

  return(
    <Fragment>
      <Nav />
    <div className='title'>
      <center><h1>2019 US Senators</h1></center>
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
