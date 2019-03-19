import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loginAndFetch } from '../Redux/actions'
import { Redirect, withRouter, Link } from 'react-router-dom'


class Login extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.loginAndFetch(e)
  }

  renderLoginForm = () => {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={this.props.email}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.props.password}
          />
          <button type='submit'>Login</button>
        </form>
      </div>
    )
  }

  render(){
    return(
      <div>
        <h1>Login!</h1>
        { localStorage.getItem('token') ? <Redirect to='/profile' /> : this.renderLoginForm() }
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
    loginAndFetch: (e) => dispatch(loginAndFetch(e))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
