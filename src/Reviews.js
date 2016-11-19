// React
import React, {Component} from 'react';
// CSS
import './App.css';
// utlities
import calculateStars from './calculateStars';
// Custom Components
import DisplayStarRating from './DisplayStarRating';
import SelectStarsContainer from './SelectStarsContainer';


const Reviews = props => {
  return (
    <section>
        { props.reviews.map( review => {
              return (
                <div className="review" key={review.user}>
                  <h4> {review.user} </h4>
                  <h5> {review.date} </h5>
                  <DisplayStarRating stars={review.rating} />
                  <p> {review.comment} </p>
                </div>
              )
            })
          }

        <h3>Write a Review</h3>
        <form onSubmit={props.handleReviewSubmission}>
          <label for="username"> Your Name: </label>
           <br/>
          <input type="text" id="username"  required="true"/>
          <SelectStarsContainer onStarSelect={props.handleStarSelection} />
          <textarea placeholder="Enter your review here" required="true"></textarea>
          <button type="submit" disabled={!props.formIsValid}/>
        </form>
      </section>
  )
}

export default Reviews;
