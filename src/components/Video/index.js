import React from "react";
import '../style.css';

import { connect } from "react-redux";

import Counter from '../Counter';

const Video = ({ activeModule, activeLesson }) => ( 
    <div>
        <div class="container"> 
            <p>Componente A.</p>
            <p><strong>Módulo: {activeModule.title}</strong></p>
            <p><span>Aula: {activeLesson.title}</span></p>             
        </div> 
        <Counter /> 
    </div>
);

export default connect(state => ({
    activeLesson: state.course.activeLesson,
    activeModule: state.course.activeModule,
}))(Video);