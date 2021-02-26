import React, { Component } from 'react'; 
import './global.css';

import { Provider } from 'react-redux';  
import { PersistGate } from 'redux-persist/integration/react';  

import {store, persistor} from './store'; 

import Header from './components/Header';
import DevList from './components/DevList';  
import GitHooks from './components/GitHooks'; 
import Comment from './components/Comment';
import Location from './components/Location';
import ChatBox from './components/ChatBox';
import Footer from './components/Footer';

export default class App extends Component { 
	render(){
		return ( 
			<Provider store={store}> 
				<Header />
				<PersistGate loading={null} persistor={persistor}>
					<DevList />	
				</PersistGate> 
				<GitHooks />
				<Comment />
				<Location />
				<ChatBox />
				<Footer />
			</Provider> 
		);
	}
} 