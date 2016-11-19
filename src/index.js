import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import {Router, Route, Link, browserHistory } from 'react-router';
import MainPageContainer from './MainPageContainer';
import RestaurantFullPageContainer from './RestaurantFullPage';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={MainPageContainer}/>
    <Route path="spotlight/:place_id" component={RestaurantFullPageContainer}/>
  </Router>,
  document.getElementById('root')
);
