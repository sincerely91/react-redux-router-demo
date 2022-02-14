import { LOGIN, LOGIN_ERROR} from "../types";

initialState = {
    auth: [],
    login_status: false
}

export default function(state = initialState, action ){
    switch (action.payload) {
        case LOGIN:
            
            break;
    
        default:
            break;
    }
}