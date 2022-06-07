import { SHOW_ERROR } from "../types";

export const showError = () => {
    return dispatch({
        type: SHOW_ERROR,
        err_msg: "There is an error"
    })
}