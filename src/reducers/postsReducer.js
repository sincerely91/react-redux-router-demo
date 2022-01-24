import { POST_ADDED } from "../actions/types";

const postsReducer = ( state = [], action ) => {
    switch (action.type) {
        case POST_ADDED:
            return [...action.payload];
            break;
    
        default:
            return state;
            break;
    }
}

export default postsReducer;