import React from 'react';
import Post from '../Post';

export default class List extends React.Component {

    state = {
        posts: [
            { id: 1, title: "Aprender React.", coments: "Componentização e Props", likes: 14 },
            { id: 2, title: "Aprender Hooks.", coments: "State.", likes: 19 },
            { id: 3, title: "Aprender Redux.", coments: "Store.", likes: 25 }
        ],
    };

    constructor(props) {
        super(props);
        setTimeout(() => {
            this.setState({
                post: [
                    ...this.state.posts,
                    { id: 4, title: "Dev Front web", coments: "aplicação completa", likes: 12}
                ]
            });
        }, 2000);
    }

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