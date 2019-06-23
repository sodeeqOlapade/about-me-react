import React from 'react';
import Footer from './footer.js';

function Rightcontainer() {
  return (
    <section className="right-container">
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

      <div className="name">
        <h1>Sodeeq R.</h1>
        <h2>Olapade</h2>
        <h5>Software Engineer</h5>
      </div>

      <a href="/src/hire.html">
        <div className="hire-div">Contact</div>
      </a>

      <Footer />
    </section>
  );
}

export default Rightcontainer;
