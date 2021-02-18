import React, { Component } from 'react';
import '../style.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from '../../store/actions/todos';

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
                <button onClick={this.addNewTodo}>Novo Todo</button> 
                <ul>
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