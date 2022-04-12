import React from "react";
import { Link } from "react-router-dom";

const UserLayout = ({children}) => {
    return (
        <div className="container">
            <h1>Dashboard</h1>
            <Link to="/account" >Account</Link>
            {children}
        </div>        
    );
}
 
export default UserLayout;