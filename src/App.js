//import logo from './logo.svg';
//import './App.css';
//import Counter from './features/counter/counter';
//import Text from './features/text/text';
import PostsList from './features/posts/PostsList';
import { Navbar } from './app/Navbar';
import AddPostForm from './features/posts/AddPostForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import React from 'react';
import SinglePostPage from './features/posts/SinglePostPage';
import EditPostForm from './features/posts/EditPostForm';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='App'>
          <Switch>
            <Route 
              exact
              path='/'
              render={() => (
                <React.Fragment>
                  <AddPostForm />
                  <PostsList />
                </React.Fragment>
              )}
            />
            <Route exact path="/posts/:postId" component={SinglePostPage} />
            <Route exact path="/posts/:postId/edit" component={EditPostForm} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Router>   
  );
}

export default App;
