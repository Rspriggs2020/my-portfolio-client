import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="navbar">
            <Link to="/" className="home-page">
                Home
            </Link>

            <Link to="/projects" className="projects-page">
                Projects
            </Link>

            <Link to="/about" className="about-page">
                About
            </Link>

            <Link to="/blogposts" className="blog-page">
                Blogs
            </Link>
        </div>
    )
}

export default NavBar;