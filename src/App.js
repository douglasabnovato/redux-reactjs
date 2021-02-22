import React, { Component } from 'react';  
import { Provider } from 'react-redux';  
import store from './store';

import Sidebar from './components/Sidebar'; 
import Video from './components/Video';
import TodoList from './components/TodoList';
import Counter from './components/Counter';
import Painel from './components/Painel'; 

import ListTodo from './components/ListTodo';
 
export default class App extends Component { 
	render(){
		return (
			<div className="App"> 
				<Provider store={store}>
					<Painel />  
					<Video /> 
					<Sidebar /> 
					<TodoList /> 
					<Counter />   
					<ListTodo /> 
				</Provider>
			</div>
		);
	}
} 