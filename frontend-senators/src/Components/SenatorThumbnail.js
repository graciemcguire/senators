import React, { Component } from 'react';
import { connect } from 'react-redux';
import Popup from "reactjs-popup";
import { handleCreateRating } from '../Redux/userActions'

class SenatorThumbnail extends Component {

  render(){
    console.log(this.props);
    const { senator, user } = this.props

    const renderPartyColor = () => {
      return senator.party === 'R' ?
      'senator-card-gop' : 'senator-card-dem'
    }

    const renderModalPartyColor = () => {
      return senator.party === 'R' ?
      'senator-modal-gop' : 'senator-modal-dem'
    }

    const renderUserSenators = () => {
      if (senator){
        return(
          <div className={ renderPartyColor() }
          onClick>
            <img className='thumnail-images' src={ senator.image } alt={ senator.name }/>
            <h2>{ senator.name }</h2>
            <h3>{ senator.party } - { senator.state }</h3>
          </div>
        )
      } else {
        return null
      }
    }

    const wokeOrJokeBtn = (e) => {
      e.preventDefault()
      console.log('milan 4ever');
      this.props.handleCreateRating(user.id, senator.id, e.target.value)
    }

    const renderModals = () => {
      return <div className={ renderModalPartyColor() }>
        <img className='thumnail-images' src={ senator.image } alt={ senator.name }/>
        <h2>{ senator.name }</h2>
        <h3>{ senator.party } - { senator.state }</h3>
        <h3>Details:</h3>
        <h3><a href= { senator.contact } target="_blank">Contact { senator.name }</a> </h3>
        <button value='woke' onClick={ (e) => wokeOrJokeBtn(e) }>Woke?</button>
        <button value='joke' onClick={ (e) => wokeOrJokeBtn(e) }>Joke?</button>
      </div>
    }

    return (
      <Popup trigger={ renderUserSenators() } modal position= "right center">
        <div className='modal'>
          { renderModals() }
        </div>
      </Popup>
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
      handleCreateRating: (userId, senatorId, wokeOrJoke) => dispatch(handleCreateRating(userId, senatorId, wokeOrJoke))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(SenatorThumbnail);
