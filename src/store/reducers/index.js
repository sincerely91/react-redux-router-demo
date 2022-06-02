import { combineReducers } from 'redux'
import userReducers from './userReducers'
import postReducers from './postReducers'
import authReducers from './authReducers'
import userpostReducers from './user/userpostReducers'

export default combineReducers({
  users: userReducers,
  posts: postReducers,
  auth: authReducers,
  userPosts: userpostReducers
})