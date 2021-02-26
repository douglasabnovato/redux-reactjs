import React from 'react';
import Post from './Post';

export default function Comment(){ 

    return (
        <section>
            <div class="text-title">
                <h4>Posts e Comentários</h4>
                <p>Qual é a sua opnião ?</p>
            </div> 
            <div class="text-post">
                <ul> 
                    <Post title="Aprendendo reactjs"/> 
                </ul> 
                <ul> 
                    <Post title="ReactJS é demais" /> 
                </ul> 
                <ul> 
                    <Post title="Em breve, Dev"/> 
                </ul> 
            </div> 
        </section>   
    );
}