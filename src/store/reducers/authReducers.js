import { LOGIN, LOGIN_ERROR} from "../types";

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
            
        default: 
            return state;
            break;
    }
}