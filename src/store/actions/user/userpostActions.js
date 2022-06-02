import { USER_GET_POSTS, USER_GET_POSTS_ERROR } from "../../types";
import axios from "axios";

export const getUserPosts = (userId) => {
    return async (dispatch) => {
        try {
            axios.get('https://jsonplaceholder.typicode.com/users/'+userId+'/posts')
            .then((res) => {
                //console.log(res.data);
                dispatch({
                    type: USER_GET_POSTS,
                    payload: res.data
                })
            })
        } catch (error) {
            dispatch( {
                type: USER_GET_POSTS_ERROR,
                payload: 'Can\'t fetch user posts',
            })
        }
       
    }
}