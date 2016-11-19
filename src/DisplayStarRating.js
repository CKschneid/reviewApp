// React
import React, {Component} from 'react';
// CSS
import './App.css';
// utlities
// Custom Components

const DisplayStarRating = props => {
  // fill states for stars... 1 = empty, 2 = half, 3 = full
  let fiveItemArray = new Array(5);
  let hasHalf = props.stars % 1 ? true : false; 

  return (
    fiveItemArray.map( (oneOfFiveItems, index) => {
      if(index + 1 <= Math.floor(props.stars)){
        return 3;
      } else if( hasHalf && index + 1 == Math.ceil(this.props.stars)) {
        return 2;
      } else {
        return 1;
      }
    }).map( starFillState => {
        switch (starFillState) {
          case 3:
            return <i className="fa fa-star"></i>;
            break;
          case 2:
            return <i className="fa fa-star-half"></i>
            break;
          case 1:
            return <i className="fa fa-star-o"></i>
            break;
        }
    })
  );
}

  export default DisplayStarRating;
