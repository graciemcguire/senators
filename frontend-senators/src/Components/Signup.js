import React, { Component } from 'react';
import { signUpAndFetch } from '../Redux/actions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Signup extends Component {

  submitHandler = (e) => {
    e.preventDefault()
    this.props.signUpAndFetch(e)
    // .then(<Redirect to='/profile' />)
  }

  render() {
    return (
    <div>
    <h1>sign up!!</h1>
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
    signUpAndFetch: (e) => dispatch(signUpAndFetch(e))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
