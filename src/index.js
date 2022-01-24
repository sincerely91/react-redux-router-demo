import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import { fetchData } from './actions';

const getState = () => {
  console.log("get unitial state!!!");
  try{
    const s = localStorage.getItem("state");
    
    console.log("Getting state, ",s);
    if (s  === null) return undefined;
    return JSON.parse(s);
  }catch(e){
    return undefined;
  }
};

const initialState = getState();
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
store.dispatch(fetchData());


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


