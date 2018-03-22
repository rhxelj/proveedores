import React from 'react';
import { Link } from 'react-router-dom'


const Footter = () => (
    <div>
     <footer className="page-footer blue">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">My React Blog</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><Link to="/" className="grey-text text-lighten-3" >Home</Link></li>
                  <li><Link to="/about" className="grey-text text-lighten-3" >about</Link></li>
                  <li><Link to="" className="grey-text text-lighten-3" >Create Post</Link></li>
                  <li><Link to="" className="grey-text text-lighten-3" >Link 4</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2014 Copyright My React Blog By CRUX
            </div>
          </div>
        </footer>
 
    </div>    

);

export default Footter;