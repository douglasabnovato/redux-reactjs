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
        <Route exact  path="/login" component={Login} />
        <RoutesPrivate exact  path="/home" component={Home} /> 
        <RoutesPrivate exact  path="/home/devlist" component={DevList} />
        <RoutesPrivate exact  path="/home/reposlist" component={ReposList} />
        <RoutesPrivate exact  path="/home/usersDetails" component={UsersDetails} />
        <RoutesPrivate exact  path="/home/shoutOut" component={ShoutOut} /> 
        <RoutesPrivate exact  path="/home/gps" component={Gps} /> 
      </Switch> 
    </StoreProvider>
  </Router>
)

export default PagesRoot;