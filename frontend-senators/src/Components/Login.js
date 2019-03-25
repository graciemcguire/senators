import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loginAndFetch } from '../Redux/userActions'
import { Redirect, withRouter, Link } from 'react-router-dom'
import wokeorjoke_v1 from '../wokeorjoke_v1.svg'

class Login extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.loginAndFetch(e, this.props.history)
    this.props.history.push('/main')
  }

  renderLoginForm = () => {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={ this.props.email }
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={ this.props.password }
          />
          <button type='submit'>Login</button>
        </form>
      </div>
    )
  }

  render(){
    return(
      <div className='App-header'>
        <img className='logo-small' src= { wokeorjoke_v1 } alt='logo'/>
        <h3>Login!</h3>
        { localStorage.getItem('token') ? <Redirect to='/main' /> : this.renderLoginForm() }
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
    loginAndFetch: (e, history) => dispatch(loginAndFetch(e, history))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
