import {
    ADD_POST, 
    DEL_POST, 
    DEL_POST_ERR, 
    GET_POSTS, 
    POST_ERROR,
    SHOW_ERROR,
    HIDE_ERROR
} from '../types';
import axios from 'axios';

const getPosts = (page=1, limit=8) => {
    const api_url = process.env.REACT_APP_API_URL;
    return async (dispatch) => {
        try{
            //const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_page='+page+'&_limit='+limit)
            const res = await axios.get(api_url+'/posts?_page='+page+'&_limit='+limit);
            const res_data = {
                data: res.data,
                page: page
            }        
            dispatch({type: GET_POSTS, payload: res_data});
            dispatch({type: HIDE_ERROR});
        }
        catch(error){            
            dispatch({
                type: SHOW_ERROR,
                payload: "Could not find any post! Something went wrong.",
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