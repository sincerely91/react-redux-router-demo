import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserPosts } from "../../store/actions/user/userpostActions";
const Posts = () => {
    const {userPosts} = useSelector(state => state.userPosts);
    const {login_status} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getUserPosts(2));
    }, [])

    return(
        <div className="row">
            <h1>My Posts</h1>
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
        </div>
    )
} 

export default Posts;