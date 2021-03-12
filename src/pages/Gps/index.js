import React, { Component } from 'react'; 
import GPS from '../../components/Location';
import '../../global.css';
import { Provider } from 'react-redux';  
import { store } from '../../store/index'; 
import Header from '../../components/Header'; 
import ChatBox from '../../components/ChatBox';
import Footer from '../../components/Footer';

import Testing, { ThemeProvider } from '../../components/Testing/index';

const coloredTheme = "white";

export default class Gps extends Component { 
	render(){
		
		return ( 
			<Provider store={store}> 
				<Header />  
				<GPS /> {/*rota : home/gps*/}
				<ThemeProvider coloredTheme={coloredTheme}>
                    <Testing />
                </ThemeProvider> 
				<ChatBox />
				<Footer />
			</Provider> 
		);
	}
} 