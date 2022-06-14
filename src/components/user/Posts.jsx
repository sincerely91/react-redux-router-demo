import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserPosts } from "../../store/actions/user/userpostActions";
import { useState } from "react";
const Posts = () => {
    const {userPosts} = useSelector(state => state.userPosts);
    const {login_status} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleTitle = (e) => {        
        setTitle(e.target.value);
    }

    const handleBody = (e) => {
        setBody(e.target.value)
    }
    
    useEffect(() => {
        dispatch(getUserPosts(2));
    }, [])

    const handleModal = () => {
        if(show){
            setShow(false);
        }else{
            setShow(true);
        } 
    }

    const handleSubmit = () => {
        if (title && body) {
            //dispatch(addPost({ userId: 234, id: 101, title, body }));
            //navigate('/posts')
            //setTitle("");
            //setBody("");
            //props.handleClose()
        }
    }

    return(
        <div className="row">
            <h1>My Posts</h1>
            <div className="col-md-12">
                <button className="btn btn-primary float-end mb-2" onClick={handleModal}>Add Post</button>
            </div>
            {[...userPosts].reverse().map(u => 
                <React.Fragment key={u.id}>
                    <div className='col-md-4 mb-3'>                                  
                        <div className='card h-100'>                                
                            <div className='card-body'>
                                <h4 >{u.title}</h4>
                                <p>{u.body}</p>
                                {/* <p>{u.body}...<Link to={`/posts/${u.id}`}>Read more</Link>.</p> */}
                            </div>
                            {(login_status)?(
                                <div className='card-footer'>
                                    <button className='btn btn-default btn-danger float-start'>Delete</button>
                                    {/* <Link to={`/posts/${u.id}`} className='btn btn-default btn-primary float-end'>View</Link> */}
                                </div>
                            ):''}
                                                            
                        </div>
                    </div>                         
                </React.Fragment>
            )}

            <div className={(show)? "modal fade show" : "modal fade"} style={(show)? {display: "block"}: {display: "none"}}  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleModal}></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3 mt-3">
                                    <label for="title">Title:</label>
                                    <input type="text" value={title} onChange={handleTitle} className="form-control" id="title" name="text" required />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label for="body">Body/Discription:</label>
                                    <textarea className="form-control" value={body} onChange={handleBody}  rows="2" id="body" name="text" required></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleModal}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Posts;