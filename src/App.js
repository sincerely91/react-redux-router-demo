import './App.css';
import React from 'react';
import Users from './components/Users';
import Posts from './components/Posts';

function App() {
  return (
      <div className='App'>
        <div className='container'>
          <h1>Users</h1>
          <Users />
          <h1>Posts</h1>
          <Posts />
        </div>    
      </div>  
  );
}

export default App;
