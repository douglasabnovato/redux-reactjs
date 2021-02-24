import React, { Component } from 'react'; 
import './global.css';

import { Provider } from 'react-redux';  
import { PersistGate } from 'redux-persist/integration/react';  

import {store, persistor} from './store'; 

import Header from './components/Header';
import DevList from './components/DevList';  
import GitHooks from './components/GitHooks';
import Location from './components/Location';


export default class App extends Component { 
	render(){
		return ( 
			<Provider store={store}> 
				<Header />
				<PersistGate loading={null} persistor={persistor}>
					<DevList />	
				</PersistGate> 
				<GitHooks />
				<Location />
			</Provider> 
		);
	}
} 