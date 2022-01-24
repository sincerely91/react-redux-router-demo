import axios from "axios";
import { POST_ADDED, POST_UPDATED, POST_DELETED } from "./types";
import config from "../config";

export const postAdded = (data) => {
    return {
        type: POST_ADDED,
        payload: {
            title: data.title,
            content: data.description
        }
    }
}

export const fetchData = () => {
    return (dispatch) => {
        return axios.get(config.API_URL + '/posts')
        .then((response) => {
            return response.data;
        })
        .then(data => {
            console.log(data)
            dispatch({
                type: POST_ADDED,
                payload: data
            })           
        })
        .catch( error =>{
            throw error();
        })
    }
}