import React, { Component, Fragment } from 'react';
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { handleCreateRating } from '../Redux/userActions'
import Nav from './Nav'
import { Card, CardWrapper } from 'react-swipeable-cards';

class MainContainer extends Component {

  onSwipeLeft = (sen) => {
    console.log("I was swiped left.");
  }

  onSwipeRight = (sen) => {
    console.log("I was swiped right.", this.props);
  }

  renderPage = () => {
    console.log(this.props.senators.senators);

    let titleStyle = {
			textAlign: "center",
			fontSize: "30px",
			fontFamily: "Serif",
			marginTop: "10px",
      color: "#00293C",
      display: 'inline-block'
		};

    if(this.props.senators.senators){
      return(
        <Fragment>
          <Nav />
          <div>
            <div style={ this.containerStyle }>
              <CardWrapper style={ this.wrapperStyle }>
              { this.props.senators.senators ?
                this.props.senators.senators.map(senator => (
                <Card
                key={ senator.id }
                senator={ senator }
                onSwipeLeft={ this.onSwipeLeft.bind(this) }
                onSwipeRight={ this.onSwipeRight.bind(this)}
                >
              <div style={ titleStyle }>
                <img className='card-image' src={ senator.image } alt={ senator.name }/>
                <h2>{ senator.name }</h2>
                <h3>{ senator.party } - { senator.state }</h3>
              </div>
                </Card>
              )) : console.log(this.props.senators) }
              </CardWrapper>
            </div>
          </div>
        </Fragment>
      )
    } else {
      return <center><h1>L O A D I N G . . .</h1></center>
    }
  }
  render(){

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
      { this.renderPage() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    senators: state.senators,
    user_senators: state.user_senators
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleCreateRating: (userId, senatorId, wokeOrJoke) => dispatch(handleCreateRating(userId, senatorId, wokeOrJoke))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
