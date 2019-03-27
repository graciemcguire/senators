import React, { Component } from 'react';
import { signUpAndFetch } from '../Redux/userActions'
import { connect } from 'react-redux'
import {  Link } from 'react-router-dom'
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
      <form onSubmit={ this.submitHandler }>
        <input
          type='text'
          name='username'
          placeholder='username'
          className='input'
        />
        <input
          type='text'
          name='email'
          placeholder='email'
          className='input'
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          className='input'
        />
        <center>
        <Link className='button' to={'/login'}>Have an Account?</Link>
        <button className='button' type='submit'>Sign Up!</button>
        </center>
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
