import React from "react";
import { Outlet, NavLink} from 'react-router-dom';

const Layout = () => {
    return (
        <div className='container-fluid mt-4'>           
            <div className='row'>
                <div className='col-md-3'>
                    <ul class="list-group">
                        <NavLink to="/user/dashboard" className={({ isActive }) => (isActive ? 'list-group-item active' : 'inactive list-group-item')}>Dashboard</NavLink>
                        <NavLink to="/user/posts" className={({ isActive }) => (isActive ? 'list-group-item active' : 'inactive list-group-item')}>Posts</NavLink>
                        <NavLink to="/user/account" className={({ isActive }) => (isActive ? 'list-group-item active' : 'inactive list-group-item')}>Account</NavLink>                     
                        <NavLink to="/user/settings" className={({ isActive }) => (isActive ? 'list-group-item active' : 'inactive list-group-item')}>Settings</NavLink>
                    </ul>
                </div>
                <div className='col-md-9'>
                    <Outlet />
                </div>
            </div>            
        </div>       
    );
}
 
export default Layout;