// React
import React, {Component} from 'react';
// CSS
import './App.css';
// utlities
// Custom Components
import SelectStars from './SelectStars';

class SelectStarsContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      hasBeenRated: false,
      rating: null,
      fillStates: [0,0,0,0,0]
    };

    this.handleHover = this.handleHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleHover(syntheticEvent) {
    // index of star => change all fill states <= index to 1
    let targetIndex = syntheticEvent.target.getAttribute('data-index');
    this.setState = { fillStates: this.state.fillStates.map(
      (fillState, index) => { index <= targetIndex ? 1 : 0 }
    )};
  }

  handleClick(syntheticEvent){
    let targetIndex = syntheticEvent.target.getAttribute('data-index');
    this.setState = {
      hasBeenRated: true,
      rating: targetIndex + 1,
      fillStates: this.state.fillStates.map(
        (fillState, index) => { index <= targetIndex ? 2 : 0 }
      )
    };
    this.props.onStarSelect(targetIndex + 1);
  }

  render(){
    return (
      <SelectStars fillStates={this.state.fillStates}
                   handleHover={this.handleHover}
                   handleClick={this.handleClick}
      />
    )
  }
}

export default SelectStarsContainer;
