import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import SenatorThumbnail from './SenatorThumbnail'
import { setAndFetchUser, fetchUserSenators } from '../Redux/userActions'
import Nav from './Nav'
import SearchForm from './SearchForm'

class Profile extends Component {

  componentDidMount () {
    const token = localStorage.getItem('token')

    if (token) {
      console.log('component did mount', this.props);
      this.props.setAndFetchUser(token)
      this.props.fetchUserSenators(token)
    }
  }

  mapSenators = () => {
    return this.props.senators.senators ? this.props.user_senators.senators.map(senator => (
      <SenatorThumbnail key={ senator.id } senator={ senator }/>)
    )
    : null
  }

  state = {
    searchTerm: '',
    clicked: false
  }

  filterSenators = () => {
    return this.props.senators.senators ?
      this.props.senators.senators.filter(senator =>
      senator.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())) : console.log('no')
  }

  changeHandler = event => {
    this.setState({
      searchTerm: event.target.value
    })
    this.filterSenators()
  }

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
        { user_senators ? this.mapSenators() : null }
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    user: state.auth.user,
    user_senators: state.user_senators.ratings,
    senators: state.senators
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
