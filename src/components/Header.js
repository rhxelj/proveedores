import React from 'react';
import { Link } from 'react-router-dom'


const Header = () => (
    <div>
   
        <nav className="blue">
            <div  className="container">    
                <div className="nav-wrapper">
                <Link to="/" className="brand-logo">Proveedores APP</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {/* <li><Link to="/">InHome</Link></li> */}
                    
                    <li><Link to="/create">Create</Link></li>
                    <li><Link to="/read">Read</Link></li>
                    <li><Link to="/update">Update</Link></li>
                    <li><Link to="/delete">Delete</Link></li>
                    <li><Link to="/LeerMonedas">Leer Monedas</Link></li>
                </ul>
                </div>
                </div>
        </nav>
 
    </div>    

);

export default Header;