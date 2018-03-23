import React from 'react';
import { Link } from 'react-router-dom'


const Header = () => (
    <div>
   
        <nav className="blue">
            <div  className="container">    
                <div className="nav-wrapper">
                <Link to="/" className="brand-logo">My React Blog</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/new-post">Create Post</Link></li>
                </ul>
                </div>
                </div>
        </nav>
 
    </div>    

);

export default Header;