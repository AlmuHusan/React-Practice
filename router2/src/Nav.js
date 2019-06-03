import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
function Nav() {
  return (
    <nav >
      <h3>LOGO</h3>
      <ul className="nav-links">
          <Link to="/about">
          <li>about</li>
          </Link>
          <Link to="/shop">
          <li>shop</li>
          </Link>
      </ul>
    </nav>
  );
}

export default Nav;
