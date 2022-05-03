import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {    

    return (
        <div className='container-fluid'>
            <div className='row text-center'>
                <h1>Dashboard</h1>
            </div>            
            <div className='row'>
                <div className='col-md-3'>
                    <ul class="list-group">
                        <li class="list-group-item active" aria-current="true">Dashboard</li>
                        <li class="list-group-item">Account</li>
                        <li class="list-group-item">Settings</li>
                        <li class="list-group-item">Timezone</li>
                    </ul>
                </div>
                <div className='col-md-9'>
                    <Outlet />
                </div>
            </div>
            
        </div>
    );
};

export default Dashboard;