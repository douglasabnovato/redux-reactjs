import React, { Component } from 'react'; 
import GPS from '../../components/Location';
import '../../global.css';
import { Provider } from 'react-redux';  
import { store } from '../../store/index'; 
import Header from '../../components/Header'; 
import ChatBox from '../../components/ChatBox';
import Footer from '../../components/Footer';

export default class Gps extends Component { 
	render(){
		
		return ( 
			<Provider store={store}> 
				<Header />  
				<GPS /> 
				<ChatBox />
				<Footer />
			</Provider> 
		);
	}
} 