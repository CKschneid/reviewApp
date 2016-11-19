// React
import React, {Component} from 'react';
// CSS
import './App.css';
// utlities
import getJSon from './getJson';
// Custom Components
import Reviews from './Reviews';

class ReviewsContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      userSession: {
        starsDirty: false,
        starsRating: 0,
        formIsValid: false
      },
      reviews: this.props.restaurant.reviews
    };
    this.handleReviewSubmission = this.handleReviewSubmission.bind(this);
    this.handleStarSelection = this.handleStarSelection.bind(this);
    this.setReviewToValid = this.setReviewToValid.bind(this);
  }

  handleStarSelection(stars){
    this.setState = { userSession: {starsDirty: true, starsRating: stars, formIsValid: true}};
  }

  handleReviewSubmission(syntheticEvent) {
    syntheticEvent.preventDefault();
    this.setState = this.state.reviews.push({
        user: syntheticEvent.target.elements[0],
        date: new Date(),
        rating: this.state.userSession.starsRating,
        comment: syntheticEvent.target.elements[1]
    });
  }

  render(){
      <Reviews reviews={this.props.restaurant.reviews}
               handleReviewSubmission={this.handleReviewSubmission}
               handleStarSelection={this.handleStarSelection}
               formIsValid={this.state.userSession.formIsValid} />
  }
}

export default ReviewsContainer;

{/*
    setReviewToValid(){
      this.setState = {userSession: {formIsValid: true}};
    }
*/}
