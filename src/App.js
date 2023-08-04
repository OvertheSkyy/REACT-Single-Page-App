import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { ThemeContext } from './context';
import { About } from './About';
import Toggle from './Toggle';
import Intro from './Introduction';
import ProductList from './ProductList';
import Contact from './Contact';


function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Router>
      <div
        style={{
          backgroundColor: darkMode ? '#222' : 'white',
          color: darkMode ? 'white' : 'black'
        }}
      >
        <Routes>
          <Route path="/" element={<About />} />
          {}
        </Routes>
        {}
        <Toggle />
        <Intro />
        <ProductList />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
