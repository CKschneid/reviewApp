// React
import React, {Component} from 'react';
// CSS
import './App.css';
// utlities
// Custom Components
import RestaurantListItem from './RestaurantListItem';

const MainPage = props => {

  let restaurantsArray = [];
  switch (props.sortMethod) {
    case "name":
      restaurantsArray = props.sortByName(props.restaurants).map( restaurant => {
        return <RestaurantListItem key={restaurant.place_id} restaurant={restaurant} />
      });
      break;
    case "stars":
      restaurantsArray = props.sortByStars(props.restaurants).map( restaurant => {
        return <RestaurantListItem key={restaurant.place_id} restaurant={restaurant} />
      });
      break;
    case "openLate":
      restaurantsArray = props.sortByName(props.filterForLate(props.restaurants)).map( restaurant => {
        return <RestaurantListItem key={restaurant.place_id} restaurant={restaurant} />
      });
      break;
  }

  return (
    <div>
        <h3> View By: </h3>
        <select onChange={props.updateSortMethod}>
          <option value="name" selected="true">Name</option>
          <option value="stars">Stars</option>
          <option value="openLate">Open Late</option>
        </select>
        <div> {restaurantsArray}</div>
      </div>
  )
}

export default MainPage;
