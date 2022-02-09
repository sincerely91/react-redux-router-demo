import {ADD_POST, GET_POSTS, POST_ERROR} from '../types';
import axios from 'axios';

const getPosts = () => {
    return async (dispatch) => {
        try{
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')        
            dispatch( {
                type: GET_POSTS,
                payload: res.data
            })
        }
        catch(e){
            dispatch( {
                type: POST_ERROR,
                payload: console.log(e),
            })
        }
    }
    
}


export const addPost = (formdata) => {    
    console.log(formdata);    
}


export default getPosts;