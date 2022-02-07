import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from './reducers'
import logger from 'redux-logger'

const initalState = {
    
}

const middleware = [thunk, logger]

const store = createStore(rootReducer, initalState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;