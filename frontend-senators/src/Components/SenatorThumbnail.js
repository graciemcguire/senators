import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal, hideModal } from '../Redux/ModuleActions'

class SenatorThumbnail extends Component {

  openModal = (event) => {
    this.props.showModal({
     open: true,
     title: 'Senator Modal',
     closeModal: this.closeModal
   }, 'alert')
  }

  render(){
    const renderPartyColor = () => {
      if (this.props.senator.party === 'D'){
        return 'senator-card-dem'
      }
      else {
        return 'senator-card-gop'
      }
    }

    const renderUserSenators = () => {
      if (this.props.senator){
        return(
          <div className={ renderPartyColor() }
          onClick={ this.openModal }>
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
      <div>
        { renderUserSenators() }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
 hideModal: () => dispatch(hideModal()),
 showModal: (modalProps, modalType) => {
  dispatch(showModal({ modalProps, modalType }))
 }
})

export default connect(mapDispatchToProps)(SenatorThumbnail);
