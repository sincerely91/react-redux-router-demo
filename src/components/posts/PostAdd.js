import React, { useState } from "react";
import { useDispatch } from "react-redux";
//import { useHistory } from "react-router-dom";
import { addPost } from "../../store/actions/postsActions";
import { useNavigate } from "react-router-dom";

const PostAdd = (props) => {
    
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleTitle = (e) => {        
        setTitle(e.target.value);
    }

    const handleBody = (e) => {
        setBody(e.target.value)
    }
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = () => {
        if (title && body) {
            dispatch(addPost({ userId: 234, id: 101, title, body }));
            navigate('/posts')
            setTitle("");
            setBody("");
            props.handleClose()
        }
    }

    return (
        <>
            <div className="modal" style={{display: props.dataDisplay}}>
                <div className="modal-content">
                    <span className="close" onClick={props.handleClose}>&times;</span>
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
                </div>
            </div>
        </>
       
    )
}

export default PostAdd;