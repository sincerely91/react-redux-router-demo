import React from 'react'
import {connect} from 'react-redux';
import getPosts from '../../store/actions/postsActions';
//import PostAdd from './PostAdd';

class Posts extends React.Component {

    componentDidMount(){
        this.props.getPosts()
    }

    render() {
        const {posts} = this.props.posts        
        return (
            <div className="container">
                {/* <PostAdd /> */}
                <div className="mb-4">
                    <h1>Available Posts</h1>
                </div>                
                {posts.map(u => 
                    <React.Fragment key={u.id}>
                        <h3 >{u.title}</h3>
                        <p>{u.body}</p> 
                    </React.Fragment>
                )}
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({posts:state.posts})

export default connect(mapStateToProps, {getPosts})(Posts);