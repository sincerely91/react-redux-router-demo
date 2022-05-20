import React from "react";
import { useSelector } from "react-redux";

const Posts = () => {

    const { posts } = useSelector(state => state.posts);
    const { user } = useSelector(state => state.auth);

    console.log(user);
    console.log(posts);

    const userposts = posts.filter(post => post.userId === 2);

    console.log(userposts);


    return(
        <h1>Posts</h1>
    )
} 

export default Posts;