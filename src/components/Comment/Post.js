import React from 'react';
import ToComment from './Comment';

import './style.css';

export default class Post extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            comments: [],
            newCommentText: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleSubmit(event){
        this.setState({
            comments:[
                ...this.state.comments,
                { text: this.state.newCommentText }
            ]
        }) ;
        this.setState({ newCommentText: ''})
        event.preventDefault();
    }

    handleTextChange(event){
        this.setState( { newCommentText: event.target.value } );
    }

    render(){
        return(
            <div className="titulo-comentario">
                <h4>{this.props.title}</h4>
                <form onSubmit={this.handleSubmit} >
                    <input 
                        value={this.state.newCommentText}
                        onChange={this.handleTextChange}
                    />
                    <button type="submit">Comentar</button>
                </form>
                { this.state.comments.map((comment, index) => {
                    return <li><ToComment key={index} text={comment.text} /></li>
                }) } 
            </div>
        );
    }
}