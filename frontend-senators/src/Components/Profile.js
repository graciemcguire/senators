import React, { Component } from 'react';
import { connect } from 'react-redux'
import Logout from './Logout'

class Profile extends Component {

  checkName = () => {
    return !this.props.user ? null
    : `welcome home, ${ this.props.user.username }.`
  }

  render() {
    console.log('profile page:', this.props);
    return (
      <div>
        { this.checkName() }
        <Logout />
        <p> put senators here </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, null)(Profile)
