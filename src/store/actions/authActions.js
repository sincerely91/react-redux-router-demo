import { LOGIN, LOGIN_ERROR, LOGOUT, SHOW_ERROR } from "../types";
import axios from 'axios';

export const getLoginUser = (formdata) => {
    return async (dispatch) => {
        /*
        try {            
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsIm5hbWUiOiJza3VtYXIiLCJpYXQiOjE2NDU2MjAxODIsImV4cCI6MTgwMzMwMDE4Mn0.3oc-wJLrjKClbQ2goBV0nzq1boI0Iq1IwQSwlgjCimg"
            const config = {
                headers: { 
                    'Authorization': `Bearer ${token}`, 
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            };
            axios.get("http://localhost/wprestapi/wp-json/wp/v2/posts", config)            
            .then((res) => {
                console.log(res);
                dispatch({
                    type: LOGIN,
                    payload: formdata
                })
            })

            dispatch({
                type: LOGIN,
                payload: formdata
            })
        } catch (error) {
           dispatch({
               type: LOGIN_ERROR,
               payload: console.log(error)
           })
        }
        */
        sessionStorage.setItem("token", formdata.token)
        //dispatching action to login
        dispatch({
            type: LOGIN,
            payload: formdata
        })
    } 
}

export const logoutUser = () => {
    return async (dispatch) => {
        sessionStorage.removeItem("token")
        dispatch({
            type: LOGOUT,
            payload: []
        })
    } 
}

