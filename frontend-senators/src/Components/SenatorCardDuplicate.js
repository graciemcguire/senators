import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardWrapper } from 'react-swipeable-cards';
import { handleCreateRating } from '../Redux/userActions'

class SenatorCard extends Component {

  render(){
    const { senator, user } = this.props

    const renderPartyColor = () => {
      return senator.party === 'R' ?
      'senator-card-gop' : 'senator-card-dem'
    }

    const renderUserSenators = () => {
      if (senator){
        return(
          <div className={ renderPartyColor() }>
            <img  src={ senator.image } alt={ senator.name }/>
            <h2>{ senator.name }</h2>
            <h3>{ senator.party } - { senator.state }</h3>
            <button value='woke' onClick={ (e) => wokeOrJokeBtn(e) }>Woke?</button>
            <button value='joke' onClick={ (e) => wokeOrJokeBtn(e) }>Joke?</button>
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

    return (
      <div>
      { renderUserSenators() }
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
      handleCreateRating: (userId, senatorId, wokeOrJoke) => dispatch(handleCreateRating(userId, senatorId, wokeOrJoke))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(SenatorCard);
