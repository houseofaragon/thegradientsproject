import React from 'react'
import logo from './logo.svg';
import { Link } from 'react-router'
import './App.css';

const Header = (props) => (
  <div className="App-header">
    <Link id='App-events' to={'/'}><img src={logo} className="App-logo" alt="the-gradients-project" /></Link>
    <div className="App-sidebar">
      <Link id='App-events' to={'/workshops'}>Workshops</Link>
      <h4><span>Contact us</span></h4>
      <a href='http://instagram.com/thegradientsproject'>Instagram</a>
      <a href='http://www.facebook.com/thegradientsproject'>Facebook</a>
      <a href='mailto:thegradientsproject@gmail.com'>Email</a>
    </div>
  </div>
)

export default Header
