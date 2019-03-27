import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import SenatorCard from './SenatorThumbnail'
import Nav from './Nav'

const MainContainer = props => {

    console.log('main', props);
    return(
      <Fragment>
        <Nav />
        <div className='senator-cards'>
        { props.senators.senators ?
          props.senators.senators.map(senator => (
          <SenatorCard
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


export default connect(mapStateToProps)(MainContainer);
