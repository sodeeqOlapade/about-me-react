import React from 'react';


function Navigation(){
    return (
        <nav>
        <ul className="main-nav-items">
          <li className="main-nav-item">
            <a href="/src/index.html">Home</a>
          </li>
          <li className="main-nav-item">
            <a href="/src/hire.html">Hire Me</a>
          </li>
          <li className="main-nav-item">
            <a href="/src/blog.html">Blog</a>
          </li>
        </ul>
      </nav>
    )
}


export default Navigation;