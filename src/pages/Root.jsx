import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import StoreProvider from '../store/Provider';

import RoutesPrivate from '../Routes/Private/Private';

import Home from './Home/Home';
import Login from './Login/Login';

const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route path="/login" component={Login} />
        <RoutesPrivate path="/home" component={Home} />
      </Switch>
    </StoreProvider>
  </Router>
)

export default PagesRoot;