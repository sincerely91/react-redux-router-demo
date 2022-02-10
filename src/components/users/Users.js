import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/actions/usersActions";

const Users = () => {
    const users = useSelector(state => state.users)

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getUsers());        
    },[])

    

    const listItems = users.users.map((user) => {
        return <li>{user.name}</li>
        
    })


    return (
        <div className="row">
            <h1>Users</h1>
            <ul>{listItems}</ul>
        </div>
    )
}

export default Users;