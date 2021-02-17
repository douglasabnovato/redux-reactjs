/*
 * actions todos.js
 * features TodoList.js
 * reducers todos.js
**/
export function addTodo(text){
	return {
		type: 'ADD_TODO',
		text,
	}
}