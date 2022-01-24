import React from "react";
import { connect } from "react-redux";
import { postAdded } from "../actions";
import { POST_ADDED } from "../actions/types";

const mapStateToProp = state => {
    return {
        posts: state.posts
    }
}

class PostsList extends React.Component{
    state = {
        posts: false
    }

    render(){
        return (
            <ul>
                {this.props.posts.map( post => 
                    <li>{post.title}</li>
                )}  
            </ul>            
        )
    }
}

export default connect(mapStateToProp, null)(PostsList);