import { GET_POSTS } from "../types";
import { ADD_POST } from "../types";

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
        case ADD_POST:
        return {
            ...state,
            posts: [...state.posts, action.payload],
            loading: false
        }

        default: return state            
            
    }
}