import React from 'react'
import {connect} from 'react-redux';
import getPosts from '../store/actions/postsActions';

class Posts extends React.Component {

    componentDidMount(){
        this.props.getPosts()
    }

    render() {
        const {posts} = this.props.posts

        
        return (
            <div className="container">
                {posts.map(u => 
                     <React.Fragment key={u.id}>
                         <h6 >{u.title}</h6> 
                     </React.Fragment>
                )}
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({posts:state.posts})

export default connect(mapStateToProps, {getPosts})(Posts);