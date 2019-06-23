import React from 'react';
import Tech from './tech';

function Blogtechs() {
  return (
    <section class="blog-left-container">
      <ul>
        <Tech techName="Java" />

        <Tech techName="Python" />

        <Tech techName="Go" />

        <Tech techName="Docker" />

        <Tech techName="Git" />

        <Tech techName="JavaScript" />

        <Tech techName="Node" />

        <Tech techName="Django" />

        <Tech techName="Firebase" />
      </ul>
    </section>
  );
}

export default Blogtechs;
