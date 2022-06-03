import {
    ADD_POST, 
    DEL_POST, 
    DEL_POST_ERR, 
    GET_POSTS, 
    POST_ERROR
} from '../types';
import axios from 'axios';

const getPosts = (page=1, limit=8) => {
    return async (dispatch) => {
        try{
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_page='+page+'&_limit='+limit)
            const res_data = {
                data: res.data,
                page: page
            }        
            dispatch( {
                type: GET_POSTS,
                payload: res_data
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

export default getPosts;

export const addPost = (formdata) => {
    return async (dispatch) => {
        try {
            axios.post('https://jsonplaceholder.typicode.com/posts', formdata)
            .then((res) => {
                //console.log(res.data);
                dispatch({
                    type: ADD_POST,
                    payload: res.data
                })
            })
        } catch (error) {
            dispatch( {
                type: POST_ERROR,
                payload: console.log(error),
            })
        }
       
    }
}

export const delPost = (id) => {
    return async (dispatch) => {
        try{
           axios.delete('https://jsonplaceholder.typicode.com/posts/'+id)
           .then((res) => {
                //console.log(res.data)
                dispatch({
                    type: DEL_POST,
                    payload: id
                })
           })
        } catch (error) {
            dispatch({
                type: DEL_POST_ERR,
                payload: console.log(error)
            })
        } 
    }
}