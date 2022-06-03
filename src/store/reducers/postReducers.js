import { GET_POSTS } from "../types";
import { ADD_POST } from "../types";
//import { GET_POST } from "../types";
import { DEL_POST } from "../types";

const initialState = {
    posts: [],
    currentPage: 1,
    loading: true
}

export default function(state = initialState, action ){
    switch (action.type) {

        case GET_POSTS:
        return {
            ...state,
            posts: action.payload.data,
            currentPage: action.payload.page,
            loading: false
        }
        case ADD_POST:
        return {
            ...state,
            posts: [...state.posts, action.payload],
            loading: false
        }
        case DEL_POST:
        return {
            ...state,
            posts: state.posts.filter((post) => post.id !== action.payload),
            loading: false
        }

        default: return state            
            
    }
}