import React from 'react'
import { useState } from "react";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const linkStyle = {
        color: activeLink ? "#d3fc03" : "",
        backgroundColor: activeLink ? 'rgba(116, 116, 116, 0.303)' : "",
        borderRadius: activeLink ? '6px' : "",

    };

    return (
        <div>
            <ul className='navbar'>
                <li><a href="#Home" style={activeLink === "#Home" ? linkStyle : {}} onClick={() => handleLinkClick("#Home")}>HOME</a></li>
                <li><a href="#About" style={activeLink === "#About" ? linkStyle : {}} onClick={() => handleLinkClick("#About")} >ABOUT</a></li>
                <li><a href="#Inspiration" style={activeLink === "#Inspiration" ? linkStyle : {}} onClick={() => handleLinkClick("#Inspiration")} >INSPIRATION</a></li>
                <li><a href="#Author" style={activeLink === "#Author" ? linkStyle : {}} onClick={() => handleLinkClick("#Author")} >AUTHOR</a></li>
                <li><a href="#Help" style={activeLink === "#Help" ? linkStyle : {}} onClick={() => handleLinkClick("#Help")} >HELP</a></li>

            </ul>

        </div>
    )
}

export default Navbar
