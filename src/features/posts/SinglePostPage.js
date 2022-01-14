import React from "react";
import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";

const SinglePostPage = ({match}) => {
    
    const { postId } = match.params

    const post = useSelector((state) => selectPostById(state, postId))

    if(!post){
        return(
            <section>
                <h2>No post found!</h2>
            </section>
        )
    }

    return(
        <section>
            <article className="post">
                <h2>{ post.title }</h2>
                <p className="post-content">{ post.content }</p>
            </article>
        </section>
    )
}

export default SinglePostPage;