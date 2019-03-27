import React, { Component } from 'react';
import { connect } from 'react-redux'
import Logout from './Logout'
import { Link } from 'react-router-dom'
import SenatorThumbnail from './SenatorThumbnail'
import { setAndFetchUser, fetchUserSenators } from '../Redux/userActions'

class Profile extends Component {

  componentDidMount () {
    console.log(this.props);
    const token = localStorage.getItem('token')

    if (token) {
      this.props.setAndFetchUser(token)
      this.props.fetchUserSenators(token)
    }
  }
  //
  // checkName = () => {
  //   return !this.props.user ? null
  //   : `${ this.props.user.username }`
  // }

  // mapSenators = () => {
  //   return this.props.user.senators.map(senator => {
  //     return <SenatorThumbnail key={ senator.id } senator={ senator }/>
  //   })
  // }

  render() {
    console.log('profile page:', this.props);
    return (
      <div >
        { /*this.checkName()*/ }
        <Link to='/profile' className='button'>Go rate some senators?</Link>
        <Logout className='button'/>
        <h1>  senators </h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    user: state.auth.user,
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
