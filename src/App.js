import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Discography from './pages/Discography';
import TourDates from './pages/TourDates';
import Media from './pages/Media';
import Merchandise from './pages/Merchandise';
import Contact from './pages/Contact';
import '../src/styles/index.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/discography" element={<Discography />} />
        <Route path="/tour-dates" element={<TourDates />} />
        <Route path="/media" element={<Media />} />
        <Route path="/merchandise" element={<Merchandise />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
