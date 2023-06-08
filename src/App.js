import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './screens/Contact';
import Home from './screens/Home';
import Projects from './screens/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import {fadeInOnScroll} from './components/ScrollAnimation';

import './App.css';


function App() {

  useEffect(() => {
    fadeInOnScroll();
}, []);

  return (
    <Router>
    <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


