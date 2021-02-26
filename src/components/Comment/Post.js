import React from 'react';
import ToComment from './Comment';

import './style.css';

export default class Post extends React.Component{
    render(){
        return(
            <div>
                <h3>{this.props.title}</h3>
                <li><ToComment text="Comentário 1"/></li>
                <li><ToComment text="Comentário 2"/></li>
            </div>
        );
    }
}