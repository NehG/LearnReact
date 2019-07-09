import React from 'react';
import logo from './logo.svg';
import { Router } from '@reach/router';
import './App.css';

import HomePage from './pages/Home';
import AboutUs from './pages/AboutUs';
import Error  from  './pages/error';

function App() {
  return (
    <Router>
      <HomePage path="/" />
      <AboutUs path="/about-us" />
      <Error default />
    </Router>
  );
}

export default App;
