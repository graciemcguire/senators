import React, { Component, Fragment } from 'react';
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { handleCreateRating } from '../Redux/userActions'
import Nav from './Nav'
import { Card, CardWrapper } from 'react-swipeable-cards';

class MainContainer extends Component {
  state = {
    message: 'S W I P E !'
  }

  onSwipeLeft = (senator) => {
    console.log(senator, "I was swiped left.")
    this.props.handleCreateRating(this.props.user.id, senator, 'joke')
    this.setState({
			message: 'J O K E !'
		});
  }

  onSwipeRight = (senator) => {
    console.log(senator, "I was swiped right.");
    this.props.handleCreateRating(this.props.user.id, senator.id, 'woke')
    this.setState({
			message: 'W O K E !'
		});
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

<<<<<<< HEAD
=======


>>>>>>> 668de5b911b4e6d38e32f23783038f095414da6c
    let senators = this.props.senators.senators


    if(!!senators){
      return senators.map(senator => {
        return(
          <Card
            style={{ backgroundColor: '#F1F3CE' }}
            key={ senator.id }
            senator={ senator }
            onSwipeLeft={ ()=> this.onSwipeLeft(senator) }
            onSwipeRight={()=> this.onSwipeRight(senator)}
          >
          <div style={ titleStyle }>
            <img className='card-image' src={ senator.image } alt={ senator.name }/>
            <h2>{ senator.name }</h2>
            <h3>{ senator.party } - { senator.state }</h3>
          </div>
        </Card>
      )
    })} else {
      return <center><h1>L O A D I N G . . .</h1></center>
    }
  }
  render(){

    let wrapperStyle = {
      backgroundColor: "#00293C",
      height: "80vh"
    };

    let containerStyle = {
      backgroundColor: "00293C",
      height: "calc(100vh - 16px)"
    }

    let messageStyle = {
      color: "white",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "2vw",
      fontFamily: "Sans-Serif",
      color: "#F1F3CE"
    }

    return(
      <Fragment>
        <Nav />
        <div style={ containerStyle }>
          <CardWrapper style={ wrapperStyle }>
            { this.renderPage() }
          </ CardWrapper>
          <div style={ messageStyle }>{ this.state.message }</div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    senators: state.senators,
    user_senators: state.user_senators.ratings
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleCreateRating: (userId, senatorId, wokeOrJoke) => dispatch(handleCreateRating(userId, senatorId, wokeOrJoke))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
