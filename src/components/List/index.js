import React from 'react';
import Post from '../Post';

export default class List extends React.Component {

    state = {
        posts: [
            { id: 1, title: "Aprender React.", coments: "Componentização.", likes: 14 },
            { id: 2, title: "Aprender Hooks.", coments: "State.", likes: 19 },
            { id: 3, title: "Aprender Redux.", coments: "Store.", likes: 25 }
        ],
    };

    render() {
        return (
            <section>
                { this.state.posts.map(post => 
                    <Post 
                        key={post.id} 
                        title={post.title} 
                        coments={post.coments} 
                        likes={post.likes} 
                    />
                )}
            </section>
        );
    }
}