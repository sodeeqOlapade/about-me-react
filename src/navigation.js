import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul className="main-nav-items">
        <li className="main-nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="main-nav-item">
          <Link to="/hire">Hire Me</Link>
        </li>
        <li className="main-nav-item">
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
