import React from 'react';
import './App.css';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Navbar from './NavBar';
import Portfolio from './Portfolio';

function App() {
  return (
    <div className="App">
      <Hero />
      <AboutMe />
      <Navbar />
      <Portfolio />
    </div>
  );
}

export default App;
