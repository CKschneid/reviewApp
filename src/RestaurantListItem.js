// React
import React, {Component} from 'react';
import {Link} from 'react-router';
// CSS
import './App.css';
// utlities
import calculateStars from './calculateStars';
// Custom Components
import DisplayStarRating from './DisplayStarRating';

const RestaurantListItem = props => {
  return(
    <div className="restaurant-list-item">
     <img className="restaurant-list-photo" src={`images/${props.restaurant.place_id}.jpg`} role="presentation"/>
     <Link to={`/spotlight/${this.props.place_id}`} className="restaurant-link">{props.restaurant.name}</Link>
     <DisplayStarRating stars={calculateStars(props.restaurant)} />
    </div>
  )
}

export default RestaurantListItem;
