import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'typeface-raleway';
import './index.css';
import App from './App';
import aboutPage from './components/static/about';

ReactDOM.render(
  <Router>
    <div className='contianer'>
      <Route path='/about' component={aboutPage} />
      <Route exact path='/' component={App} />
    </div>
  </Router>,
  document.getElementById('root')
);
