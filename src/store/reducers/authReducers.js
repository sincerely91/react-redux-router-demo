import { LOGIN, LOGIN_ERROR, LOGOUT} from "../types";

const initialState = {
    user: [],
    login_status: false
}

export default function(state = initialState, action ){
    switch (action.type) {
        
        case LOGIN:
            return {
                ...state,
                user: action.payload,
                login_status: true
            }            
            break;

        case LOGOUT:
            return {
                ...state,
                user: action.payload,
                login_status: false
            }            
            break;
            
        default: 
            return state;
            break;
    }
}