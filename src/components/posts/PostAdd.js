import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addPost } from "../../store/actions/postsActions";

const PostAdd = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleTitle = (e) => {        
        setTitle(e.target.value);
    }

    const handleBody = (e) => {
        setBody(e.target.value)
    }

    const history = useHistory()
    const dispatch = useDispatch()

    const handleSubmit = () => {
        if (title && body) {

            dispatch(addPost({ userId: 234, id: 101, title, body }));

            //history.push('/posts')
            setTitle("");
            setBody("");
        }
    }

    return (
        <div className="row">
            <form>
                <div className="mb-3 mt-3">
                    <label for="title">Title:</label>
                    <input type="text" value={title} onChange={handleTitle} className="form-control" id="title" name="text" required />
                </div>
                <div className="mb-3 mt-3">
                    <label for="body">Body/Discription:</label>
                    <textarea className="form-control" value={body} onChange={handleBody}  rows="2" id="body" name="text" required></textarea>
                </div>               
                <button type="button" onClick={handleSubmit} className="btn btn-primary float-end">Add Post</button>
            </form>
        </div>
    )
}

export default PostAdd;