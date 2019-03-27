import React, { Component } from 'react';
import { connect } from 'react-redux'
import SenatorThumbnail from './SenatorThumbnail'
import { setAndFetchUser, fetchUserSenators } from '../Redux/userActions'
import Nav from './Nav'

class Profile extends Component {

  componentDidMount () {
    const token = localStorage.getItem('token')

    if (token) {
      this.props.setAndFetchUser(token)
      this.props.fetchUserSenators(token)
    }
  }

  // mapSenators = () => {
  //   return this.props.user.senators.map(senator => {
  //     return <SenatorThumbnail key={ senator.id } senator={ senator }/>
  //   })
  // }

  render() {
    return (
      <div >
      <Nav />
        { /*this.checkName()*/ }
        <h1>  my senators </h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    user_senators: state.user_senators
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
