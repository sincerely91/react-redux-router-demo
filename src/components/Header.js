import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logoutUser } from "../store/actions/authActions";
import logo from '../images/logo.png';

const Header = () => {
    const {login_status} = useSelector(state => state.auth)
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const location = useLocation()

    const logout = () => {
        dispatch(logoutUser())
    }

    return (        
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
            <a className="navbar-brand" href="/"><img src={logo} className="app-logo"/></a>        
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/posts" className="nav-link">Posts</Link>
                </li>
                {/* <li className="nav-item">
                    <Link to="/users" className="nav-link">Users</Link>
                </li>
                <li className="nav-item">
                    <Link to="/items" className="nav-link">Items</Link>
                </li> */}
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/modal" className="nav-link">Modal</Link>
                </li>
                {/* <li className="nav-item">
                    <Link to="/products" className="nav-link">Products</Link>
                </li>*/}
            </ul>            
                
            {login_status ? (
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <div class="dropdown">
                            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                {user.username}
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li className="nav-item">
                                    <Link to="/dashboard" className="dropdown-item">Dashboard</Link>                                    
                                </li>
                                <li className="nav-item">
                                    <Link to="/account" className="dropdown-item">Account</Link>                                    
                                </li>
                                <li className="nav-item">
                                    <Link to={location.pathname} className="dropdown-item" onClick={logout}>Logout</Link>                                    
                                </li>
                            </ul>
                        </div>                      
                    </li>                    
                </ul>
            ) : (
                <ul className="navbar-nav justify-content-end">
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link">Register</Link>
                    </li>
                </ul>
            )}                
                        
        </nav>
    )
}

export default Header;