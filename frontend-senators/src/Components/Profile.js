import React, { Component } from 'react';
import { connect } from 'react-redux'
import Logout from './Logout'
import { Link } from 'react-router-dom'
import SenatorThumbnail from './SenatorThumbnail'
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
      return <SenatorThumbnail key={ senator.id } senator={ senator }/>
    })
  }

  render() {
    console.log('profile page:', this.props);
    return (
      <div >
        { this.checkName() }
        <Link to='/main' className='button'>Go rate some senators?</Link>
        <Logout className='button'/>
        <h1> your rated senators </h1>
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
