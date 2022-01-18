import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    posts: [
      {id: 1, title: "lorem ipsum", content: "lorem ipsum conent"}
    ],
    status: 'idle',
    error: null 
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
       
        postUpdated: {
            reducer(state, action){
                const { id, title, content } = action.payload
                //const existingPost = state.find(post => post.id === id)
                const existingPost = state.posts.find(post => post.id === id)
                if (existingPost) {
                    existingPost.title = title
                    existingPost.content = content
                }
            }
        }
        
    }
})

export const { postAdded, postUpdated } = postsSlice.actions 
export default postsSlice.reducer


export const selectAllPosts = state => state.posts.posts
export const selectPostById = (state, postId) => state.posts.posts.find(post => post.id === postId)
