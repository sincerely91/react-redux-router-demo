import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../store/actions/authActions";

const Header = () => {
    const {login_status} = useSelector(state => state.auth)
    const { user } = useSelector(state => state.auth) 
    
    const dispatch = useDispatch();
    
    const logout = () => {
        dispatch(logoutUser())
    }
    

    return (
        
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <a className="navbar-brand" href="#"><img src="logo.png" className="app-logo"/></a>        
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <Link to="/home" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/posts" className="nav-link">Posts</Link>
                </li>
                <li className="nav-item">
                    <Link to="/users" className="nav-link">Users</Link>
                </li>
                <li className="nav-item">
                    <Link to="/items" className="nav-link">Items</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>                                               
            </ul>            
                
            {login_status ? (
                <ul className="navbar-nav justify-content-end">
                    <li className="nav-item">
                        <Link to="/dashboard" className="nav-link">
                            {user.email}
                        </Link>                       
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={logout}>
                            Logout
                        </Link>                       
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