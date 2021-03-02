import React, { Component } from 'react'; 
import Comment from '../../components/Comment';
import '../../global.css';
import { Provider } from 'react-redux';  
import { store } from '../../store/index'; 
import Header from '../../components/Header'; 
import ChatBox from '../../components/ChatBox';
import Footer from '../../components/Footer';

export default class ShoutOut extends Component { 
	render(){
		
		return ( 
			<Provider store={store}> 
				<Header /> 
        <Comment />
				<ChatBox />
				<Footer />
			</Provider> 
		);
	}
} 