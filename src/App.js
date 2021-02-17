import React from 'react';  
import TodoList from './components/TodoList/TodoList';
import Counter from './components/Counter/Counter';
import Sidebar from './components/Sidebar';
import Video from './components/Video';
 
function App() { 
	return (
		<div className="App">
		  <TodoList />
		  <Counter />
		  <Video />
		  <Sidebar /> 
		</div>
	);

}

export default App;