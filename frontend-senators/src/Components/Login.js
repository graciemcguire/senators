import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loginAndFetch } from '../Redux/actions'
import { Redirect } from 'react-router-dom'


class Login extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.loginAndFetch(e)
  }

  render(){
    return(
      <h1>does this work</h1>
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
    loginAndFetch: (e) => dispatch(loginAndFetch(e))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
