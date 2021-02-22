import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ListActions from '../store/actions/listtodo';

const ListTodo = ({todos, addTodo}) => (
    <div className="container">
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>{todo.text}</li>
            )) }        
        </ul>
        <button onClick={() => addTodo('Fazer Café')}>Novo Todo</button>
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(ListActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);