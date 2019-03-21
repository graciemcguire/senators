import React, { Component } from 'react';
import { connect } from 'react-redux'
import Logout from './Logout'
import { Link } from 'react-router-dom'
import SenatorModule from './SenatorModule'
import { setAndFetchUser } from '../Redux/userActions'

class Profile extends Component {

  componentDidMount () {
    console.log(this.props);
    const token = localStorage.getItem('token')

    if (token) {
      this.props.setAndFetchUser(token)
    }
  }

  checkName = () => {
    return !this.props.user ? null
    : `welcome home, ${ this.props.user.username }.`
  }

  mapSenators = () => {
    return this.props.user.senators.map(senator => {
      return <SenatorModule key={ senator.id } senator={ senator }/>
    })
  }

  render() {
    console.log('profile page:', this.props);
    return (
      <div>
        { this.checkName() }
        <Link to='/main'>Go rate some senators?</Link>
        <Logout />
        <p> put senators here </p>
        { this.props.user ? this.mapSenators() : null }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAndFetchUser: (token) => dispatch(setAndFetchUser(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
