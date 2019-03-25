import React, { Component } from 'react';
import { signUpAndFetch } from '../Redux/userActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import wokeorjoke_v1 from '../wokeorjoke_v1.svg'

class Signup extends Component {

  submitHandler = (e) => {
    e.preventDefault()
    this.props.signUpAndFetch(e, this.props.history)
  }

  render() {
    return (
      <div className='App-header'>
        <img className='logo-small' src= { wokeorjoke_v1 } alt='logo'/>
        <h2>Sign Up</h2>
      <form onSubmit={ this.submitHandler }>
        <input
          type='text'
          name='username'
          placeholder='username'
        />
        <input
          type='text'
          name='email'
          placeholder='email'
        />
        <input
          type='password'
          name='password'
          placeholder='password'
        />
        <button type='submit'></button>
      </form>
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
    signUpAndFetch: (e, history) =>
    dispatch(signUpAndFetch(e, history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
