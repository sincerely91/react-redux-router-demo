import './App.css';
import React from 'react';
//import Users from './components/Users';
import Posts from './components/posts/Posts';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
              <Route path="/about">
               <About />
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
