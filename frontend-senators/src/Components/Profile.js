import React, { Component } from 'react';
import { connect } from 'react-redux'
import SenatorThumbnail from './SenatorThumbnail'
import { setAndFetchUser, fetchUserSenators } from '../Redux/userActions'
import Nav from './Nav'

class Profile extends Component {

  componentDidMount () {
    const token = localStorage.getItem('token')

    if (token) {
      console.log('component did mount', this.props);
      this.props.setAndFetchUser(token)
      this.props.fetchUserSenators(token)
    }
  }

  mapSenators = () => {
    return this.props.user_senators.senators.map(senator => (
      <SenatorThumbnail key={ senator.id } senator={ senator }/>)
    )
  }

  render() {
          console.log('render', this.props);
    return (
      <div className='senator-grid'>
      <Nav />
        <h1>  my sweet supple senators </h1>
        {  this.props.user_senators ? this.mapSenators() : null }
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    user: state.auth.user,
    user_senators: state.user_senators.ratings,
    senators: state.senators
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAndFetchUser: (token) => dispatch(setAndFetchUser(token)),
    fetchUserSenators: (token) =>
    dispatch(fetchUserSenators(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
