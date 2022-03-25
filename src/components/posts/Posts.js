import React, { useEffect } from 'react'
import {connect, useDispatch, useSelector} from 'react-redux';
import getPosts from '../../store/actions/postsActions';
import { delPost } from '../../store/actions/postsActions';
//import PostAdd from './PostAdd';
import PostModal from '../../elements/modals/PostModal';
import { Link } from 'react-router-dom';

const Posts = () => {
    const {posts} = useSelector(state => state.posts)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [])
    
    //console.log(posts)

    return (
        <div className="container">
            {/* <PostAdd /> */}
            <div className='row mb-4 mt-2'>
                <div className="col-md-6">
                    <h1>Available Posts</h1>                    
                </div>
                <div className="col-md-6">
                    <button type="button" className="btn btn-primary float-end" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add Post
                    </button>
                    <PostModal />
                </div>
            </div>
            <div className="row">
                {posts.map(u => 
                    <React.Fragment key={u.id}>
                        <div className='col-md-3 mb-3'>                                  
                            <div className='card h-100'>
                                <div className='card-body'>
                                    <h3 >{u.title}</h3>
                                    <p>{u.body}</p>
                                </div>
                                <div className='card-footer'>
                                    <button className='btn btn-default btn-danger float-start' onClick={() => dispatch(delPost(u.id))}>Delete</button>
                                    <Link to={`/posts/${u.id}`} className='btn btn-default btn-primary float-end'>View</Link>
                                </div>                                
                            </div>
                        </div>                         
                    </React.Fragment>
                )}
            </div>       
        
        </div>
    )
}

export default Posts;