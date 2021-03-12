import React from 'react';
import Post from '../Post';

export default class List extends React.Component {
    render() {
        return (
            <section>
                <Post title="Aprendendo React." /> 
                <Post coments="Componentização." /> 
                <Post coments="Propriedades." />
                <Post coments="Estados." />
                <Post likes={14} />
            </section>
        );
    }
}