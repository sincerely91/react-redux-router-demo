import React from "react";
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='container-fluid mt-4'>           
            <div className='row'>
                <div className='col-md-3'>
                    <ul class="list-group">
                        <Link to="/user/dashboard" className="list-group-item">Dashboard</Link>
                        {/* <li class="list-group-item active" aria-current="true">Dashboard</li> */}
                        <Link to="/user/account" className="list-group-item">Account</Link>
                        <li class="list-group-item">Timezone</li>
                        <li class="list-group-item">Settings</li>
                       
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