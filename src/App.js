import './App.css';
import React from 'react';
import Posts from './components/posts/Posts';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Users from './components/users/Users';
import Login from './components/auth/Login';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Register from './components/auth/Register';
import Items from './components/items/Items';

function App() {
  return (
      <div className='App'>
        <Router>
          <Header />
          <div className='container'>
            <Switch>
              <Route path="/posts">
                <Posts />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/items">
                <Items />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>            
          </div>    
        </Router>       
      </div>  
  );
}

export default App;
