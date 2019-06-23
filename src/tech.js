import React from 'react';


function Tech(props) {
    return (
      <a href="#">
        <li className="item">
          <div className="language-icon">
            <h2>{/[A-Z]/.exec(props.techName)[0]}</h2>
          </div>
          <div className="language-name">
            <h4>{props.techName}</h4>
          </div>
        </li>
      </a>
    );
  }


  export default Tech;