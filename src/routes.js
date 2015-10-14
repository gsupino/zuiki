import React from 'react';
import {Route} from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import Test from './containers/test';

export default (
  <Route component={App}>
      <Route path="/" component={Home}/>
          <Route path="about" component={Test} />
  </Route>
);
