import React from 'react';
import { Router, Route } from 'react-router';
var hashHistory = require('react-router').hashHistory;
var IndexRoute = require('react-router').IndexRoute;
import App from '../App';

var routes = (
	<Router history={hashHistory}>
	  <Route path='/' component={App}>
	  </Route>
	</Router>
);

export default routes;