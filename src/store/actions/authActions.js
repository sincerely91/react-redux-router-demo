import { LOGIN, LOGIN_ERROR } from "../types";

export const getLoginUser = (formdata) => {
    return async (dispatch) => {
        dispatch({
            type: LOGIN,
            payload: formdata
        })
    } 
}
