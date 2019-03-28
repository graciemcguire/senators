import React, { Component } from 'react'
import { render } from 'react-dom'
import { Card, CardWrapper } from 'react-swipeable-cards';

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

  onDoubleTap(data) {
    console.log("I was double tapped.");
  }

  renderCards() {
    let data = ["first", "second", "third"];
    return data.map((d) => {
      return(
        <Card
          key={d}
          onSwipe={this.onSwipe.bind(this)}
          onSwipeLeft={this.onSwipeLeft.bind(this)}
          onSwipeRight={this.onSwipeRight.bind(this)}
          onDoubleTap={this.onDoubleTap.bind(this)}>
            Hello World!
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

export default TestSwipe;
