import './App.css';
import React from 'react';
import { useSelector } from 'react-redux';
import Posts from './components/posts/Posts';
import Post from './components/posts/Post';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Modal from './components/Modal';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/user/Dashboard';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/products/Products';
import Account from './components/user/Account';
import Layout from './components/user/Layout';
import Settings from './components/user/Settings';
import Addresses from './components/user/Addresses';
import UserPosts from './components/user/Posts';

function App() {
  const {login_status} = useSelector(state => state.auth)
  //console.log(login_status);

  return (
      <div className='App'>
        <BrowserRouter>
          <div className="container-fluid">
            <Header />
          </div>
          <Routes>            
            <Route path="/" element={<Home />} />            
            <Route path="posts/:id" exact={true} element={<Post />} />
            <Route path="posts" element={<Posts />} />            
            <Route path="about" element={<About />} />
            <Route path="modal" element={<Modal />} />
            <Route path="products" element={<Products /> } />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />           
            <Route path='user' element={<Layout />}>
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='posts' element={ <UserPosts />} />
              <Route path='account' element={<Account />} />
              <Route path='addresses' element={<Addresses />} />
              <Route path='settings' element={<Settings />} />
            </Route>                        
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>  
  );
}

export default App;
