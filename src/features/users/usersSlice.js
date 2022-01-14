import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'

const initialState = [
  {id: 1, name: "skumar"}
]

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await client.get('/fakeApi/users')
    return response.data
  })

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        
    },
    extraReducers(builder) {
        builder.addCase(fetchUsers, (state, action) => {
          return action.payload
        })
    },
})

export default usersSlice.reducer