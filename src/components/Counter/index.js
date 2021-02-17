import React from 'react';
import '../style.css';

import { connect } from 'react-redux';

const Counter = (props) => (
    <div class="container">
        <p>Componente D.</p>
        <p>Você tem <span>{props.todos.length}</span>todos.</p> 
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos, 
});

export default connect(mapStateToProps)(Counter);