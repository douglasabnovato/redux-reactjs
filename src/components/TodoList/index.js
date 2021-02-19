import React from 'react';
import '../style.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TodoActions from '../../store/actions/todos';
    
const TodoList = ({ todos, addTodo }) => (
    <div class="container">
		<p>Componente B.</p>
        <ul>
            { todos.data.map(todo => (
                <li key={ todo.id }>{ todo.text }</li>
            )) }
            <button onClick={ () => addTodo('Fazer café')}>Novo Todo</button>
        </ul>
    </div>        
);

const mapStateToProps = state => ({
    todos: state.todos, 
});

const mapDispatchToProps = dispatch => 
    bindActionCreators(TodoActions, dispatch); 

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);