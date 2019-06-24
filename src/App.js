import React from 'react';
import './App.css';
import Leftcontainer from './leftcontainer'
import Rightcontainer from './rightcontainer'
import Myimage from './myImage'


function Homepage() {
  return (
    <section className = 'wrapper'>
      <Leftcontainer />
      <Rightcontainer />
      <Myimage />
    </section>
  );
}

export default Homepage;
