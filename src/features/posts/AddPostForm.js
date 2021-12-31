import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";

const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useDispatch('')

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value) 

    const onSavePostClicked = () => {
        dispatch(
            postAdded({
                id: nanoid(),
                title,
                content
            })
        )

        setTitle('')
        setContent('')
    }

    return (
        <section>
            <h2>Add new post</h2>
            <form>
                <label htmlFor="postTitle">Post Title: </label>
                <input 
                    type="text"
                    id="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <br />
                <label htmlFor="postContent">Content: </label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                /><br/>
                <button type="button" onClick={onSavePostClicked}>Save Post</button>
            </form>
        </section>
    )
}

export default AddPostForm;