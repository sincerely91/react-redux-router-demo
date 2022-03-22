import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
    const { id } = useParams();
    return (
        <div className="container">
            <h1>Single Post</h1>
        </div>
    )
}

export default Post;