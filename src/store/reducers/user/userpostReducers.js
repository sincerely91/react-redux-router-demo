import { 
    USER_GET_POSTS, 
    USER_GET_POSTS_ERROR 
} from "../../types";

const initialState = {
    userPosts: [],
    loading: true,
    error: null
}

export default function(state=initialState, action) {
    switch (action.type) {
        case USER_GET_POSTS:
            return {
                ...state,
                userPosts: action.payload,
                loading: false,
            }
        
        case USER_GET_POSTS_ERROR:
            return {
                ...state,
                loading:false,
                error: action.payload
            }
    
        default:
            return state;
    }
}

