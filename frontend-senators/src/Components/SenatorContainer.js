import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import SenatorThumbnail from './SenatorThumbnail'
import Nav from './Nav'
import SearchForm from './SearchForm'

class SenatorContainer extends Component  {

  state = {
    searchTerm: ''
  }

  filteredSenators = () => {
    if(this.state.searchTerm === '' ) {
      return this.props.senators.senators.map(senator => (
        <SenatorThumbnail key={ senator.id } senator={ senator }/>))
    } else {
      let filtered = this.props.senators.senators.filter(senator =>
      senator.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
      return filtered.map(senator => (
        <SenatorThumbnail key={ senator.id } senator={ senator }/>))
    }
  }

  changeHandler = event => {
    this.setState({
      searchTerm: event.target.value
    })
    this.filteredSenators()
  }

  toggleSenators = () => {
    console.log('clicked:', this.state.clicked)
    this.setState({ clicked: !this.state.clicked })

  }

  render(){
    console.log(this.state)
    const { senators } = this.props

    return(
      <Fragment>
        <Nav />
      <div className='title'>
        <center><h1>2019 US Senators</h1></center>
        <center>
          <SearchForm  changeHandler={ this.changeHandler }/>
        </center>
      </div>

      <div className= 'senator-grid'>
        { senators.senators ?
          this.filteredSenators() : console.log(senators) }
      </div>
      </Fragment>
    )
  }
}

  const mapStateToProps = (state) => {
    return {
      user: state.auth.user,
      senators: state.senators
    }
  }


export default connect(mapStateToProps)(SenatorContainer);
