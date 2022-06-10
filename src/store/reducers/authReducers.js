import { LOGIN, LOGIN_ERROR, LOGOUT} from "../types";

const initialState = {
    user: [],
    login_status: false,
    err_msg: null
}

export default function(state = initialState, action ){
    switch (action.type) {
        
        case LOGIN:
            return {
                ...state,
                user: action.payload,
                login_status: true,
                err_msg: null
            }

        case LOGOUT:
            return {
                ...state,
                user: action.payload,
                login_status: false,
                err_msg: null
            }            
        
        case LOGIN_ERROR:
            return {
                ...state,
                err_msg: action.payload
            }
        default: 
            return state;
    }
}