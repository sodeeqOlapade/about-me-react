import React from 'react';
import me from './images/image.jpeg';

function Leftcontainer() {
  return (
    <section className="left-container">
      <img className="logo" src={me} alt="my_logo" />

      <a href="https://www.linkedin.com/in/olapadesodeeq/" className="handle">
        @simply_sodeeq
      </a>
    </section>
  );
}

export default Leftcontainer;
