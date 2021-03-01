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
import DevList from './DevList';
import ReposList from './ReposList';
import UsersDetails from './UsersDetails';
import Gps from './Gps';
import ShoutOut from './ShoutOut'

const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route path="/login" component={Login} />
        <RoutesPrivate path="/home" component={Home} />
        <RoutesPrivate path="/home/devlist" component={DevList} />
        <RoutesPrivate path="/home/reposlist" component={ReposList} />
        <RoutesPrivate path="/home/usersDetails" component={UsersDetails} />
        <RoutesPrivate path="/home/gps" component={Gps} />
        <RoutesPrivate path="/home/shoutOut" component={ShoutOut} />
        <RoutesPrivate path="/home/talkToMe" component={Gps} />
      </Switch>
    </StoreProvider>
  </Router>
)

export default PagesRoot;