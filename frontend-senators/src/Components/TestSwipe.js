import React, { Component } from 'react'
import { render } from 'react-dom'
import { Card, CardWrapper } from 'react-swipeable-cards';
import { handleCreateRating } from '../Redux/userActions'
import { connect } from 'react-redux';

class TestSwipe extends Component {

  onSwipe(sen) {
    console.log("I was swiped.");
  }

  onSwipeLeft(sen) {
    console.log("I was swiped left.");
  }

  onSwipeRight(sen) {
    console.log("I was swiped right.");
  }

  renderPartyColor = () => {
    return this.props.senator.party === 'R' ?
    'senator-card-gop' : 'senator-card-dem'
  }

  cardStyle = {
    backgroundColor: "#F1F3CE",
    textAlign: 'center'
   }


  renderCards() {
    const { senator } = this.props
    console.log(this.props);
    let sen = [this.props.senator]
    let titleStyle = {
			textAlign: "center",
			fontSize: "30px",
			fontFamily: "Serif",
			marginTop: "10px",
      color: "#00293C",
      display: 'inline-block'
		};
     return sen.map((sen) => {
      return(
        <Card
          style={ this.cardStyle }
          key={ sen.id }
          onSwipe={ this.onSwipe.bind(this) }
          onSwipeLeft={ this.onSwipeLeft.bind(this) }
          onSwipeRight={ this.onSwipeRight.bind(this)} >

          <div style={ titleStyle }>

            <img className='card-image' src={ senator.image } alt={ senator.name }/>
            <h2>{ senator.name }</h2>
            <h3>{ senator.party } - { senator.state }</h3>
          </div>
        </Card>
      );
    });
  }


  render() {

    let wrapperStyle = {
      backgroundColor: "#024773",
      height: "80vh"
    };
    let containerStyle = {
      backgroundColor: "green",
      height: "calc(100vh - 16px)"
    }

    return(
      <div>
          { this.renderCards() }
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(TestSwipe);
