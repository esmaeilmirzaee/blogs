import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'typeface-raleway';
import './index.css';
import App from './App';
import aboutPage from './components/static/about';
import Post from './components/post';
import nf from './components/NotFound';

ReactDOM.render(
  <Router>
    <div className='contianer'>
      <Route path='/404' component={nf} />
      <Route path='/post/:id' render={(props) => <Post {...props} />} />
      <Route path='/about' component={aboutPage} />
      <Route exact path='/' component={App} />
    </div>
  </Router>,
  document.getElementById('root')
);
