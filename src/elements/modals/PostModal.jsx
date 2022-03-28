import React from "react";
import PostAdd from '../../components/posts/PostAdd'

const PostModal = (props) => {


    return (
        <div className="modal" style={{display: props.dataDisplay}}>
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Add Post</h5>
                    <button type="button" className="btn-close" onClick={props.handleClose} aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <PostAdd />
                </div>
                {/* <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div> */}
                </div>
            </div>
        </div>
    )
}

export default PostModal;