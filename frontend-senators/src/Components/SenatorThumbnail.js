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
     title: 'Senator Modal',
     closeModal: this.closeModal
    })
    return <SenatorModule  />
  }



  render(){
    const renderPartyColor = () => {
      if (this.props.senator.party === 'R'){
        return 'senator-card-gop'
      }
      else {
        return 'senator-card-dem'
      }
    }

    const renderUserSenators = () => {
      if (this.props.senator){
        return(
          <div className={ renderPartyColor() }
          onClick>
            <img src={ senator.image } alt={ senator.name } />
            <h2>{ senator.name }</h2>
            <h3>{ senator.party } - { senator.state }</h3>
          </div>
        )
      } else {
        return null
      }
    }
    const { senator } = this.props
    return (
      <Popup trigger={ renderUserSenators() } />
    )
  }
}

export default (SenatorThumbnail);
