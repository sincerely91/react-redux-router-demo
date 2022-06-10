import { USER_GET_POSTS, USER_GET_POSTS_ERROR } from "../../types";
import axios from "axios";

export const getUserPosts = (userId) => {
    return async (dispatch) => {
        try {
            const api_url = process.env.REACT_APP_API_URL;
            axios.get(api_url+'/users/'+userId+'/posts')
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