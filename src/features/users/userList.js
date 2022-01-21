import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PostsList = () => {
    
    const users = [
        {id: 1, name: "John Dev"},
        {id: 2, name: "mr Dos"}
    ]

    const userList = users.map((user) => {
        <li>{user.name}</li>
    })
    return (
        <section className="users-list">
            <h2>Users</h2>
            <ul>
                {userList}
            </ul>
        </section>
    )
}

export default PostsList;

