import React, { Component } from 'react';
import '../style.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActions from '../../store/actions/todos';
  
/* 
const TodoList = ({ todos, addTodo }) => (

    <div class="container">
        <p>Componente C.</p> 
        <ul>
            <button onClick={this.addNewTodo}>Novo Todo</button> 
            {this.props.todos.map(todo => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
        <input 
            type="text"
            value={this.state.newTodoText}
            onChange={(e) => this.setState({ newTodoText: e.target.value })}
        />                
    </div>
);*/


class TodoList extends Component {

    constructor(props) {
        super(props); 
    };

    state = {
        newTodoText: '',
    }
    
    addNewTodo = () => {
        this.props.addTodo(this.state.newTodoText);
        this.setState({ newTodoText: '' });
    };

    render() {
        return (
            <div class="container">
                <p>Componente C.</p> 
                <ul>
                    <button onClick={this.addNewTodo}>Novo Todo</button> 
                    {this.props.todos.map(todo => (
                        <li key={todo.id}>{todo.text}</li>
                    ))}
                </ul>
                <input 
                    type="text"
                    value={this.state.newTodoText}
                    onChange={(e) => this.setState({ newTodoText: e.target.value })}
                />                
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => 
    bindActionCreators(todoActions, dispatch); 

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);