import React, { Component } from 'react'; 
import { Provider } from 'react-redux';  
import { PersistGate } from 'redux-persist/integration/react';  

import {store, persistor} from './store'; 

import DevList from './components/DevList';  
import GitHooks from './components/GitHooks';


export default class App extends Component { 
	render(){
		return ( 
			<Provider store={store}> 
				<PersistGate loading={null} persistor={persistor}>
					<DevList />	
				</PersistGate> 
				<GitHooks />	
			</Provider> 
		);
	}
} 