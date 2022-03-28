import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import getPosts from '../../store/actions/postsActions';
import { delPost } from '../../store/actions/postsActions';
import PostAdd from './PostAdd';
import PostModal from '../../elements/modals/PostModal';
import { Link } from 'react-router-dom';

const Posts = () => {
    const {posts} = useSelector(state => state.posts)
    const {login_status} = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const [display, setDisplay] = useState('none')

    const handleDisplay = () => {
        setDisplay('block')
    }

    const handleClose = () => {
        setDisplay('none')
    }


    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return (
        <div className="container">
            {/* <PostAdd /> */}
            <div className='row mb-4 mt-2'>
                <div className="col-md-6">
                    <h2>Available Posts</h2>                    
                </div>
                <div className="col-md-6">
                {(login_status)?(
                    <button type="button" className="btn btn-primary float-end" onClick={handleDisplay}>
                        Add Post
                    </button>
                    ):''}
                    <PostModal handleClose={handleClose} dataDisplay={display}/>
                </div>
            </div>
            <div className="row">
                {[...posts].reverse().map(u => 
                    <React.Fragment key={u.id}>
                        <div className='col-md-3 mb-3'>                                  
                            <div className='card h-100'>                                
                                <div className='card-body'>
                                    <h4 >{u.title}</h4>
                                    <p>{u.body}...<Link to={`/posts/${u.id}`}>Read more</Link>.</p>
                                </div>
                                {(login_status)?(
                                    <div className='card-footer'>
                                        <button className='btn btn-default btn-danger float-start' onClick={() => dispatch(delPost(u.id))}>Delete</button>
                                        {/* <Link to={`/posts/${u.id}`} className='btn btn-default btn-primary float-end'>View</Link> */}
                                    </div>
                                ):''}
                                                             
                            </div>
                        </div>                         
                    </React.Fragment>
                )}
            </div>       
        
        </div>
    )
}

export default Posts;