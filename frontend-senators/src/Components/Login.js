import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loginAndFetch } from '../Redux/userActions'
import { withRouter, Link } from 'react-router-dom'
import wokeorjoke_v1 from '../wokeorjoke_v1.svg'

class Login extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.loginAndFetch(e, this.props.history)
    this.props.history.push('/profile')
  }

  renderLoginForm = () => {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input
            className='input'
            type="text"
            name="email"
            placeholder="email"
            value={ this.props.email }
          />
          <input
            className='input'
            type="password"
            name="password"
            placeholder="password"
            value={ this.props.password }
          />
        <center>
        <Link className='button' to={'/signup'}>Sign Up?</Link>
        <button className='button' type='submit'>Login</button>
          </center>
        </form>
      </div>
    )
  }

  render(){
    return(
      <div className='App-header'>
        <img className='logo-small' src= { wokeorjoke_v1 } alt='logo'/>
        { this.renderLoginForm() }
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
