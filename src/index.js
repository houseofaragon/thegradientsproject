import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Layout from './Layout'
import Workshops from './Workshops'

import './index.css';

import { Router, Route, IndexRoute, hashHistory } from 'react-router'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Layout} >
      <IndexRoute component={App} />
      <Route path='/workshops' component={Workshops} />
    </Route>
  </Router>,
  document.getElementById('root')
);
