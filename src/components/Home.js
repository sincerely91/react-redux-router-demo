import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='row text-center'>
            <Link to="/home" ><img src='logo.png' style={{height: "300px"}}/></Link>
            <h1>Welcome to my Blog Site</h1>
        </div>
        
    )
}

export default Home;