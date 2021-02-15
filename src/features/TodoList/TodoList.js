import React, { Component } from "react";

class TodoList extends Component {
	render() {
		return(
			<div>
				<ul>
					<li>Item do TodoList</li>
				</ul>
				<input type="text"/>
				<button>Novo TodoList</button>
			</div>
		);
	}
}
export default TodoList;