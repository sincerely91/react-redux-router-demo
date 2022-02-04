import React from "react";

const PostAdd = () => {

    return (
        <div className="row">
            <form>
                <div className="mb-3 mt-3">
                    <label for="comment">Comments:</label>
                    <textarea className="form-control" rows="2" id="comment" name="text" required></textarea>
                </div>               
                <button type="submit" className="btn btn-primary float-end">Add Post</button>
            </form>
        </div>
    )
}

export default PostAdd;