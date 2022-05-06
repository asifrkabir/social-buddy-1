import React from 'react';
import { useNavigate } from "react-router-dom";

const Post = (props) => {

    const {id, title, body} = props.post;
    const history = useNavigate();
    const showComments = id => {
        const url = `post/${id}`;
        history(url);
    }

    return (
        <div>
            <h3><strong>ID: {id} </strong>{title}</h3>
            <p>{body}</p>
            <button onClick={() => showComments(id)}>Show Comments</button>
        </div>
    );
};

export default Post;