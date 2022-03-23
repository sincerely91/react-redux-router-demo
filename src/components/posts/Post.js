import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Post = () => {
    const { id } = useParams();
    const posts = useSelector(state => state.posts)

    const post = posts.posts.find(post => { 
        return post.id == id
    })

    
    return (
        <div className="container">
            <h2>Post Detail</h2>
            <div className="card mt-4" style={{height: "250px"}}>
                <div className="card-body">
                    <h1>{post.title}</h1>
                    <br />
                    <p>{post.body}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Post;