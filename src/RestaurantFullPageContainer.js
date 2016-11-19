// React
import React, {Component} from 'react';
// CSS
import './App.css';
// utlities
import getJSon from './getJson';
// Custom Components
import RestaurantFullPage from './RestaurantFullPage';

class RestaurantFullPageContainer extends Component{
  constructor(props) {
    super(props);
    this.state = { featuredRestaurant: { }};
    getJson('restaurants.json').then( restaurantsData => {
      let restaurant = restaurantsData.find( restaurant => restaurant.place_id == this.props.params.place_id );
      this.setState = {featuredRestaurant: restaurant};
    });
  }

  render(){
    <RestaurantFullPage featuredRestaurant={this.state.featuredRestaurant} />
  }
}

export default RestaurantFullPageContainer;
