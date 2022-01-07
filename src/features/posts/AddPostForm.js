import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";

const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const dispatch = useDispatch('')

    const users = useSelector(state => state.users)

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

    const onSavePostClicked = () => {
        dispatch(
            postAdded({
                id: nanoid(),
                title,
                content,
                userId
            })
        )

        setTitle('')
        setContent('')
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
        {user.name}
        </option>
    ))

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
                    className="form-control"
                />
                <br />
                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChanged} className="form-control">
                    <option value=""></option>
                    {usersOptions}
                </select>
                <label htmlFor="postContent">Content: </label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                /><br/>
                <button type="button" onClick={onSavePostClicked} disabled={!canSave}>Save Post</button>
            </form>
        </section>
    )
}

export default AddPostForm;