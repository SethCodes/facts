import React, {useState, useEffect} from 'react';
import Facts from './facts';
import Wave from '../src/wave.svg';







const Posts = (props) => {
    const [post, setPost] = useState({title: 'yo', content: "contnt"});

    
    let id = props.match.params.post_id;

    const fact = Facts.filter(fact => fact.id == id);


    useEffect(() => {


        setPost(fact[0]);
console.log(post);

    }, [fact]);

    return(
        <div className="factDiv">
        <div className="postDiv">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
            </div>
        </div>
    )
}

export default Posts
