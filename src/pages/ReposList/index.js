import React, { Component } from 'react'; 
import RepostListCom from '../../components/GitHooks';
import '../../global.css';
import { Provider } from 'react-redux';  
import { store } from '../../store/index'; 
import Header from '../../components/Header'; 
import ChatBox from '../../components/ChatBox';
import Footer from '../../components/Footer';

export default class DevList extends Component { 
	render(){
		
		return ( 
			<Provider store={store}> 
				<Header />
        <RepostListCom />
				<ChatBox />
				<Footer />
			</Provider> 
		);
	}
} 