import React from "react";
import { Link } from "react-router-dom";

const links = [

    {
        name: "list",
        href: "list",
    },

    {
        name: "add",
        href: "add",
        
    },

];

const Navbar = () => {

    return (

        <div>
            {links.map((x) => (
                <Link to={x.href}>{x.name}</Link>
            ))}
 
        </div>
    );
};

export default Navbar;
