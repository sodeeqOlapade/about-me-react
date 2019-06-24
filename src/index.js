import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Route, BrowserRouter as Router } from 'react-router-dom';

//components
import Homepage from './App';
import Hire from './hire';
import Blog from './blog';

import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Homepage} />
      <Route path="/hire" component={Hire} />
      <Route path="/blog" component={Blog} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
