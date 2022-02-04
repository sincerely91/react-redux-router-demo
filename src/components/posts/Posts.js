import React from 'react'
import {connect} from 'react-redux';
import getPosts from '../../store/actions/postsActions';
import PostAdd from './PostAdd';

class Posts extends React.Component {

    componentDidMount(){
        this.props.getPosts()
    }

    render() {
        const {posts} = this.props.posts
        
        return (
            <div className="container">
                <PostAdd />
                <h1>Available Posts</h1>
                {posts.map(u => 
                     <React.Fragment key={u.id}>
                         <h6 >{u.id}. {u.title}</h6> 
                     </React.Fragment>
                )}
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({posts:state.posts})

export default connect(mapStateToProps, {getPosts})(Posts);