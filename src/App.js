import React from 'react';  
import TodoList from './TodoList';
import Counter from './Counter';
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
      <TodoList/>
      <Counter/>
      <Sidebar/>
    </div>
  );
}

export default App;
