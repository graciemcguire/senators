import React, { Component } from 'react';
import { connect } from 'react-redux'

class Profile extends Component {

  render() {
    console.log('profile page:', this.state);
    return (
      <div>
        <h1>{this.props.user}</h1>
        <p> put senators here</p>
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
