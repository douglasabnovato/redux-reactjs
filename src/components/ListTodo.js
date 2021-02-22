import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ListActions from '../store/actions/listtodos';

const ListTodo = ({listtodos, addListTodo}) => (
    <div className="container">
        <h3>Componente E</h3>
        <button onClick={() => addListTodo('Fazer Café !!')}>Novo Todo</button>
        <ul>
            {listtodos.map(listtodo => (
                <li key={listtodo.id}>{listtodo.text}</li>
            )) }        
        </ul> 
    </div>
);

const mapStateToProps = state => ({
    listtodos: state.listtodos,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(ListActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);