import { HIDE_ERROR, SHOW_ERROR } from "../types";

const initialState = {
    is_error: false,
    err_msg: null
}

export default function(state = initialState, action){
    switch (action.type) {
        case SHOW_ERROR:
            return {
                ...state,
                is_error: true,
                err_msg: action.payload
            }
        
        case HIDE_ERROR:
            return {
                ...state,
                is_error: false,
                err_msg: null
            }
        
        default:
            return state;
    }

}
