import { combineReducers } from "@reduxjs/toolkit";
import postsReducer from "./postsReducer";

const rootReducer = combineReducers({
    posts: postsReducer
})

export default rootReducer;