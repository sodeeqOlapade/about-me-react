import React from 'react';
import Footer from './footer.js';
import Navigation from './navigation.js'

function Rightcontainer() {
  return (
    <section className="right-container">
      <Navigation />

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
