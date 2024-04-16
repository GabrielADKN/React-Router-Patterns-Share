import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./Nav.css";
import colors from "../db.json";

function Nav() {
    return (
        <nav className="NavBar">
            <Link key={0} to="/dogs">
                Home
            </Link>
            {colors.colors.map((color) => (
                <Link key={color.id} to={`/colors/${color.name}`}>
                    {color.name}
                </Link>
            ))}
        </nav>


    );
}

export default Nav;