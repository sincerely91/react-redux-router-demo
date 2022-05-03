import React from "react";
import Account from "./Account";
import Dashboard from "./Dashboard";

const UserLayout = () => {
    return (
        <Dashboard>
            <Account />
        </Dashboard>       
    );
}
 
export default UserLayout;