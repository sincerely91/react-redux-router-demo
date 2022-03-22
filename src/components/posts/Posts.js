import React from 'react'
import {connect} from 'react-redux';
import getPosts from '../../store/actions/postsActions';
//import PostAdd from './PostAdd';
import PostModal from '../../elements/modals/PostModal';
import { Link } from 'react-router-dom';

class Posts extends React.Component {

    componentDidMount(){
        this.props.getPosts()
    }

    render() {
        const {posts} = this.props.posts        
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
                {posts.map(u => 
                    <React.Fragment key={u.id}>
                        <Link to={`/posts/${u.id}`}>
                            <div className='card mb-2'>
                                <div className='card-body'>
                                    <h3 >{u.title}</h3>
                                    <p>{u.body}</p>
                                </div>                                
                            </div>
                        </Link>                        
                    </React.Fragment>
                )}
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({posts:state.posts})

export default connect(mapStateToProps, {getPosts})(Posts);