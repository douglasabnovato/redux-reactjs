import React, { Component } from 'react'; 
import '../../global.css';
import { Provider } from 'react-redux';  
import { store } from '../../store/index'; 
import Header from '../../components/Header'; 
import ChatBox from '../../components/ChatBox';
import Footer from '../../components/Footer';

export default class PagesHome extends Component { 
	render(){
		
		return ( 
			<Provider store={store}> 
				<Header /> 
				<section>
					Welcome to Nvoip !!
				</section> 
				<ChatBox />
				<Footer />
			</Provider> 
		);
	}
} 