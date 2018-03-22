import React from 'react';

const Header = () => (
    <div>
   
        <nav className="blue">
            <div className="nav-wrapper">
            <a href="#" className="brand-logo">My React Blog</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#sass.html">Home</a></li>
                <li><a href="#badges.html">About</a></li>
                <li><a href="#collapsible.html">Create Post</a></li>
            </ul>
            </div>
        </nav>
 
    </div>    

);

export default Header;