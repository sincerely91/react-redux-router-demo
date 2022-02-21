import { LOGIN, LOGIN_ERROR, LOGOUT } from "../types";

export const getLoginUser = (formdata) => {
    return async (dispatch) => {
        dispatch({
            type: LOGIN,
            payload: formdata
        })
    } 
}

export const logoutUser = () => {
    return async (dispatch) => {
        dispatch({
            type: LOGOUT,
            payload: []
        })
    } 
}