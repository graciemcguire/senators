import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import SenatorThumbnail from './SenatorThumbnail'
import { setAndFetchUser, fetchUserSenators } from '../Redux/userActions'
import Nav from './Nav'
import SearchForm from './SearchForm'

class Profile extends Component {
  state = {
    searchTerm: '',
    clicked: false
  }

  componentDidMount () {
    const token = localStorage.getItem('token')

    if (token) {
      this.props.setAndFetchUser(token)
      this.props.fetchUserSenators(token)
    }
  }

  filterSenators = () => {
    return this.props.user_senators.senators.filter(senator =>
      senator.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  mapSenators = () => {
    console.log(this.props.user_senators);
    return this.props.user_senators.senators ? this.props.user_senators.senators.map(senator => (
      <SenatorThumbnail key={ senator.id } senator={ senator }/>)
    )
    : null
  }


  changeHandler = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  // toggleSenators = () => {
  //
  // }

  toggle = () => this.setState({ clicked: !this.state.clicked })

  buttonText = () => !this.state.clicked ? 'Viewing Woke Senators' : 'Viewing Joke Senators'

  render() {

  const { user_senators } = this.props

    return (
      <Fragment>
        <Nav />
      <div className='title'>
        <center><h1>My Rated Senators</h1></center>
        <center>
          <SearchForm  changeHandler={ this.changeHandler }/>
          <button className='button-reverse' onClick={ this.toggle }>{ this.buttonText() }</button>
        </center>
      </div>

      <div className= 'senator-grid'>
        { user_senators ? this.mapSenators() : <center><h1>L O A D I N G . . .</h1></center> }
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    user: state.auth.user,
    user_senators: state.user_senators.ratings
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAndFetchUser: (token) => dispatch(setAndFetchUser(token)),
    fetchUserSenators: (token) =>
    dispatch(fetchUserSenators(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
