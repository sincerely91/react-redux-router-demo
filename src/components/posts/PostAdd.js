import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ADD_POST } from "../../store/types";

const PostAdd = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    //console.log(body);

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
            dispatch({
                type: ADD_POST,
                payload: { userId: 234, id: 101, title, body }
            })
            //history.push('/posts')
        }
    }

    return (
        <div className="row">
            <form>
                <div className="mb-3 mt-3">
                    <label for="title">Title:</label>
                    <input type="text" value={title} onChange={(e) => handleTitle(e)} className="form-control" id="title" name="text" required />
                </div>
                <div className="mb-3 mt-3">
                    <label for="body">Body:</label>
                    <textarea className="form-control" value={body} onChange={(e) => handleBody(e)}  rows="2" id="body" name="text" required></textarea>
                </div>               
                <button type="button" onClick={handleSubmit} className="btn btn-primary float-end">Add Post</button>
            </form>
        </div>
    )
}

export default PostAdd;