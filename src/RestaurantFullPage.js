// React
import React, {Component} from 'react';
// CSS
import './App.css';
// utlities
import calculateStars from './calculateStars';
// Custom Components
import DisplayStarRating from './DisplayStarRating';
import Reviews from './Reviews';

const RestaurantFullPage = props => {
  return (
    <div>
      <h1> {props.featuredRestaurant.name}</h1>
      <img src={`images/${props.featuredRestaurant.place_id}`} />
      <DisplayStarRating stars={calculateStars(props.featuredRestaurant)} />
      <h3> {props.featuredRestaurant.address[0]} </h3>
      <h3> {props.featuredRestaurant.address[1]} </h3>
      <h2> Reviews </h2>
      <Reviews restaurant={props.featuredRestaurant} />
    </div>
  )
}

export default RestaurantFullPage;
