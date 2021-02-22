import React from 'react';
import '../style.css';

import { connect } from 'react-redux';

const Counter = (props) => (
    <div className="container">
        <h3>Componente D</h3>
        <p>Você tem <span>{props.todos.length}</span>todos.</p> 
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos, 
});

export default connect(mapStateToProps)(Counter);