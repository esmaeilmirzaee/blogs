import React from 'react';
import ReactDOM from 'react-dom';
import { BorwserRouter as Router, Route, Switch } from 'react-router-dom';
import 'typeface-raleways';
import './index.css';
import App from './App';

ReactDOM.render(
  <Router>
    <div className='contianer'>
      <Route exact path='/' component={App} />
    </div>
  </Router>,
  document.getElementById('root')
);
