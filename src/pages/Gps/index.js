import React, { Component } from 'react'; 
import GPS from '../../components/Location';
import '../../global.css';
import { Provider } from 'react-redux';  
import { store } from '../../store/index'; 
import Header from '../../components/Header'; 
import ChatBox from '../../components/ChatBox';
import Footer from '../../components/Footer';

import List from '../../components/List';

import Testing, { ThemeProvider } from '../../components/Testing/index';

import SemHooks from '../../components/ButtonHooks';

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
				<List/>
				<SemHooks/>
				<ChatBox />
				<Footer />
			</Provider> 
		);
	}
} 