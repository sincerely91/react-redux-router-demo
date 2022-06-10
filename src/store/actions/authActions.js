import { LOGIN, LOGIN_ERROR, LOGOUT, SHOW_ERROR } from "../types";
import axios from 'axios';

export const getLoginUser = (formdata) => {
    return async (dispatch) => {
        
        //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsIm5hbWUiOiJza3VtYXIiLCJpYXQiOjE2NDU2MjAxODIsImV4cCI6MTgwMzMwMDE4Mn0.3oc-wJLrjKClbQ2goBV0nzq1boI0Iq1IwQSwlgjCimg"
        const config = {
            headers: { 
                //'Authorization': `Bearer ${token}`, 
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        };
        const api_url = process.env.REACT_APP_API_URL;
        axios.get(api_url+"/user", config)         
        .then((res) => {
            const user = res.data;

            if(user.username === formdata.username && user.password === formdata.password){
                sessionStorage.setItem("token", user.token);
                dispatch({
                    type: LOGIN,
                    payload: user
                })
            }else{
                dispatch({
                    type: LOGIN_ERROR,
                    payload: "Invalid credentials."
                })
            }
            
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

