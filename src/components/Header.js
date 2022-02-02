import React from "react";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <a className="navbar-brand" href="#"><img src="mylogo.png" className="app-logo"/></a>        
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Posts</a>
                </li>
            </ul>
        </nav>
    )
}

export default Header;