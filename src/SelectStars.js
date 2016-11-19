// React
import React, {Component} from 'react';
// CSS
import './App.css';
// utlities
import starsClassLogic from './starsClassLogic';
// Custom Components

const SelectStars = props => {
  return (
    props.fillStates.map( (fillState, index) => {
          return (
            <i className={`fa ${starsClassLogic.bind(fillState)}`}
               onHover={props.handleHover}
               onClick={props.handleClick}
               key={index}
               data-index={index}>
            </i>
          )
      })
  )
}

export default SelectStars;
