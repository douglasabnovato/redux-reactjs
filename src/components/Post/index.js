import React from 'react';

export default class Post extends React.Component {

    componentWillReceiveProps(props) {
        this.setState({ title: `Aplicação ${props.title}, ciclo de vida de componentes.` });
    }
    render(){
        return (  
            <div>         
                <h4>{this.props.title}</h4>
                <h5>{this.props.coments}</h5>
                <h6>{this.props.likes}</h6>
            </div> 
        );
    }
} 