import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
    return (
        <nav className="NavBar">
            <Link to="/dogs">
                Home
            </Link>
            <Link to="/dogs/Whiskey">
                Whiskey
            </Link>
            <Link to="/dogs/Duke">
                Duke
            </Link>
            <Link to="/dogs/Perry">
                Perry
            </Link>
        </nav>


    );
}

export default Nav;