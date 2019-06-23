import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './App';
import * as serviceWorker from './serviceWorker';
import Hire from './hire';
import Blog from './blog';

ReactDOM.render(<Blog />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
