import React, { Component } from 'react';

export default class Testing extends Component {
    render(){
        return (
            <Header>
                Olá React Children.
            </Header>
        );
    }
}

function Header ({ children }){
    return <h1>{ children }</h1>
}