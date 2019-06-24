import React from 'react';
import './index.css';
import Blogtechs from './blogtechs';
import Blogright from './blogright';

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <Blogtechs />
        <Blogright />
      </div>
    );
  }
}

export default Blog;
