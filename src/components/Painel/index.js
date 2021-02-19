import React from "react";
import '../style.css';

import { connect } from "react-redux";

const Painel = (props, activeModule, activeLesson ) => ( 
    <div>
        <div className="container"> 
            <p>Componente Painel</p>
            <p>Componente A</p>  
            <p>Exibir o module e a lesson!</p>  
            <p>Componente B.</p>  
            <p>Exibir o module e a lesson!</p> 
            <p>Componente C</p>    
            <p>Exibir a lista aqui!!</p> 
            <p>Componente D</p> 
            <p>Você tem <span>{props.todos.length}</span>todos.</p>        
        </div> 
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos, 
});

export default connect(mapStateToProps)(Painel);