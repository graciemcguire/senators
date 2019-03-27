import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
import wokeorjoke_v1 from '../wokeorjoke_v1.svg'

class Nav extends Component {

  render(){
    const profileLink = () => {
      if (localStorage.getItem("token")){
        return (
        <Fragment>
          <Link className='button nav-links' to={`/profile`}>Your Profile</Link>
          <Link className='button nav-links' to={'/logout'}>Log Out</Link>
        </Fragment>
      )
      } else {
        return (
          <Fragment>
            <Link className='button nav-links'  to={'/login'}>Log in?</Link>
            <Link className='button nav-links' to={'/signup'}>Sign Up?</Link>
          </Fragment>
        )
      }
    }

  return (
    <Fragment>
      <div className='nav'>
        <img className='logo-nav nav-logo' src= { wokeorjoke_v1 } alt='logo'/>
        <Link className='button nav-links' to={'/senators'}>All Senators</Link>
        <Link className='button nav-links' to={'/main'}>Swipe?</Link>
        { profileLink() }
      </div>
    </Fragment>
  );
  }

}

export default withRouter(Nav);
