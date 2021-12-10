import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="navbar">
            <Link to="/" className="home-page">
                Home
            </Link>

            <Link to="/about" className="about-page">
                About
            </Link>
        </div>
    )
}

export default NavBar;