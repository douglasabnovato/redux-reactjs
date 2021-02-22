import React from "react";
import '../style.css';

import { connect } from "react-redux";

const Video = ({ activeModule, activeLesson }) => ( 
    <div>
        <div className="container"> 
            <h3>Componente A</h3> 
            <p><strong>Módulo: {activeModule.title}</strong></p>
            <p><span>Aula: {activeLesson.title}</span></p>             
        </div> 
    </div>
);

export default connect(state => ({
    activeLesson: state.course.activeLesson,
    activeModule: state.course.activeModule,
}))(Video);