import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ListActions from '../store/actions/listtodos';

const ListTodo = ({listtodos, addListtodo}) => (
    <div className="container">
        <ul>
            {listtodos.map(listtodo => (
                <li key={listtodo.id}>{listtodo.text}</li>
            )) }        
        </ul>
        <button onClick={() => addListtodo('Fazer Café')}>Novo Todo</button>
    </div>
);

const mapStateToProps = state => ({
    listtodos: state.listtodos,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(ListActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);