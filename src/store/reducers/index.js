import { combineReducers } from 'redux'
import userReducers from './userReducers'
import postReducers from './postReducers'

export default combineReducers({
  users: userReducers,
  posts: postReducers
})