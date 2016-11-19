// React
import React, {Component} from 'react';
// CSS
import './App.css';
// utlities
import getJson from './getJson';
import calculateStars from './calculateStars';
// Custom Components
import MainPage from './MainPage';

class MainPageContainer extends Component{
  constructor(props){
      super(props);
      this.state = {
        sortMethod: "name",
        restaurants: []
      };
      getJson('restaurants_minified.json').then( restaurantData => {
        this.setState({ restaurants: restaurantData});
        console.log(this.state.restaurants);
      });
      this.updateSortMethod = this.updateSortMethod.bind(this);
      this.sortByName = this.sortByName.bind(this);
      this.sortByStars = this.sortByStars.bind(this);
      this.filterForLate = this.filterForLate.bind(this);
  }

  updateSortMethod(syntheticEvent){
     this.setState = { sortMethod: syntheticEvent.target.value};
     console.log('sort method updated');
  }

  sortByName(restaurants){
    console.log('restaurants as array: ', this.state.restaurants);
     return restaurants.sort( (a,b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1);
  }

  sortByStars(restaurants){
     return restaurants.sort( (a,b) => calculateStars(a) > calculateStars(b) ? 1 : -1 );
  }

  filterForLate(restaurants){
     return restaurants.filter( restaurant => {
         let isOpenLate = false; // after 11 pm
         restaurant.hours.forEach( day => {
           if( day[day.length - 1] > 11) {
             isOpenLate = true;
           }
         });
         return isOpenLate;
     });
  }

  render(){
    return (
      <MainPage restaurants={this.state.restaurants}
                sortMethod={this.state.sortMethod}
                updateSortMethod={this.updateSortMethod}
                sortByName={this.sortByName}
                sortByStars={this.sortByStars}
                filterForLate={this.filterForLate}
      />
    )
  }
}

export default MainPageContainer;
