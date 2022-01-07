import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import textReducer from '../features/text/textSlice'
import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        text: textReducer,
        posts: postsReducer,
        users: usersReducer
    },
})
