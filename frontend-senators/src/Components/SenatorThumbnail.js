import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal, hideModal } from '../Redux/ModalActions'
import Modal from 'react-modal';
import SenatorModule from './SenatorModule'
import Popup from "reactjs-popup";

class SenatorThumbnail extends Component {

  openModal = (event) => {
    this.props.showModal({
     open: true,
     title: 'Senator Modal'
    })
    return <SenatorModule  />
  }



  render(){
    const { senator } = this.props

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

    const renderModals = () => {
      return <div className={ renderModalPartyColor() }>
        <img className='thumnail-images' src={ senator.image } alt={ senator.name }/>
        <h2>{ senator.name }</h2>
        <h3>{ senator.party } - { senator.state }</h3>
        <h3>Details:</h3>
        <h3><a href= { senator.contact } target="_blank">Contact { senator.name }</a> </h3>
        <button onClick={ this.props.addWoke }>Woke?</button> <button onClick={ this.props.addWoke }>Joke?</button>
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

export default (SenatorThumbnail);
