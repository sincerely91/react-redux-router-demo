import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import getPosts from '../../store/actions/postsActions';
import { delPost } from '../../store/actions/postsActions';
import PostAdd from './PostAdd';
//import PostModal from '../../elements/modals/PostModal';
import { Link } from 'react-router-dom';

const Posts = () => {
    const {posts, currentPage} = useSelector(state => state.posts)
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

    const page_list = [];
    for (let page = 1; page < 11; page++) {
        let active = (page == currentPage) ? 'active' : ''; 
        page_list.push(<li className={active+' page-item'}><button className="page-link" onClick={() => dispatch(getPosts(page, 8))}>{page}</button></li>)
    }

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
                    <PostAdd handleClose={handleClose} dataDisplay={display} />
                </div>
            </div>
            <div className="row">
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-end">
                        <li className="page-item"><button className="page-link" onClick={() => dispatch(getPosts(currentPage-1, 8))}>Previous</button></li>
                        {page_list}
                        <li className="page-item"><button className="page-link" onClick={() => dispatch(getPosts(currentPage+1, 8))}>Next</button></li>
                    </ul>
                </nav>
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
            <div className="row">
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-end">
                        <li className="page-item"><button className="page-link" onClick={() => dispatch(getPosts(currentPage-1, 8))}>Previous</button></li>
                        {page_list}
                        <li className="page-item"><button className="page-link" onClick={() => dispatch(getPosts(currentPage+1, 8))}>Next</button></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Posts;