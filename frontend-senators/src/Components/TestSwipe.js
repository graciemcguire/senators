import React, { Component } from 'react'
import { render } from 'react-dom'
import { Card, CardWrapper } from 'react-swipeable-cards';
import { handleCreateRating } from '../Redux/userActions'
import { connect } from 'react-redux';

class TestSwipe extends Component {

  onSwipe(data) {
    console.log("I was swiped.");
  }

  onSwipeLeft(data) {
    console.log("I was swiped left.");
  }

  onSwipeRight(data) {
    console.log("I was swiped right.");
  }

  renderCards() {
    const { senator } = this.props
    console.log(this.props);
    let sen = [this.props.senator]
     return sen.map((sen) => {
      return(
        <Card
          key={ sen.id }
          onSwipe={ this.onSwipe.bind(this) }
          onSwipeLeft={ this.onSwipeLeft.bind(this) }
          onSwipeRight={ this.onSwipeRight.bind(this)} >
            <img className='card-image' src={ senator.image } alt={ senator.name }/>
            <h2>{ senator.name }</h2>
            <h3>{ senator.party } - { senator.state }</h3>
        </Card>
      );
    });
  }

  render() {
    return(
      <CardWrapper>
        {this.renderCards()}
      </CardWrapper>
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
