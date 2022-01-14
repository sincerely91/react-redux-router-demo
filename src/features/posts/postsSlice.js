import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from '../../api/client'

const initialState = {
    posts: [],
    status: 'idle',
    error: null 
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await client.get('/fakeApi/posts')
    console.log(response.data)
    return response.data
})

export const addNewPost = createAsyncThunk(
    'posts/addNewPost',
    async (initialPost) => {
      const response = await client.post('/fakeApi/posts', initialPost)
      return response.data
    }
  )

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
        },
        extraReducers(builder) {
            builder
              .addCase(fetchPosts.pending, (state, action) => {
                state.status = 'loading'
              })
              .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Add any fetched posts to the array
                state.posts = state.posts.concat(action.payload)
              })
              .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
              })
              .addCase(addNewPost.fulfilled, (state, action) => {
                state.posts.push(action.payload)
              })
        },
        
    }
})

export const { postAdded, postUpdated } = postsSlice.actions 
export default postsSlice.reducer


export const selectAllPosts = state => state.posts.posts
export const selectPostById = (state, postId) => state.posts.posts.find(post => post.id === postId)
