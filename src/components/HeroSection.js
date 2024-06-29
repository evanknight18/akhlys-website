import React from 'react';
import bandPic from '../assets/images/gallery/Band-Pic.JPG';
import '../styles/index.css';

const HeroSection = () => {
  return (
    <section className="hero bg-cover bg-center text-center mb-12 bg-yellow-800 text-white py-20" 
    style={{ backgroundImage: `url(${bandPic})`, 
    backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
         }}>
      <div className="hero-content">
        <h2 className="text-4xl font-bold">Exploring the Depths of Nightmares and Dreams Through Black Metal</h2>
        <div className="mt-4">
          <a href="/discography" className="btn btn-primary">Listen Now</a>
          <a href="/tour-dates" className="btn btn-secondary">Upcoming Tour Dates</a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;