import React from 'react';
import {Route} from 'react-router';
import App from './containers/App';
import Home from './components/Home';
import Test from './components/test';

export default (
  <Route component={App}>
    <Route path="/" component={Home}/>
    <Route path="about" component={Test} />
  </Route>
);
