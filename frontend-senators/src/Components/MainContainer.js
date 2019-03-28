import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import SenatorCard from './SenatorThumbnail'
import Nav from './Nav'

const MainContainer = props => {

const renderPage = () => {
  if(props.senators){
    return(
      <Fragment>
      <div className='main'>
        <Nav />
        <div className='senator-cards'>
          { props.senators.senators ?
            props.senators.senators.map(senator => (
            <SenatorCard
            key={ senator.id }
            senator={ senator }/>
          )) : console.log(props.senators) }
        </div>
      </div>
      </Fragment>
    )
  } else {
    return <center><h1>L O A D I N G . . .</h1></center>
  }
}

    console.log('main', props);
    return(
      <div>
      { renderPage() }
      </div>
    )
}


const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    senators: state.senators
  }
}


export default connect(mapStateToProps)(MainContainer);
