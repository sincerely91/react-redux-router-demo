import { GET_POSTS } from "../types";

const initialState = {
    posts: [],
    loading: true
}
export default function(state = initialState, action ){
    switch (action.type) {

        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
            break;
    
        default: return state            
            break;
    }
}