import './App.css';
import React from 'react';
import Posts from './components/posts/Posts';
import Post from './components/posts/Post';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
// import Users from './components/users/Users';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
// import Items from './components/items/Items';
import Dashboard from './components/user/Dashboard';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/products/Products';

function App() {
  return (
      <div className='App'>
        <BrowserRouter>
          <div className="container-fluid">
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts/:id" exact={true} element={<Post />} />
            <Route path="/posts" element={<Posts />} />            
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products /> } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" component={<Dashboard />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>  
  );
}

export default App;
