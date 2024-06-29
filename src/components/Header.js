import React from 'react';
import logoPic from '../assets/images/gallery/akhlys-classic-logo.jpg';
import '../styles/index.css';

const Header = () => {
  return (
    <header
      className="bg-black text-dark-text p-4"
      style={{
        backgroundImage: `url(${logoPic})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center 35%',
        height: '400px',
        padding: '2rem',
      }}
    >
      <h1 className="text-4xl font-medieval font-bold">Akhlys</h1>
      <nav className="mt-2 font-almendra font-bold">
        <a href="/" className="text-accent hover:underline">Home</a>
        <a href="/about" className="ml-4 text-accent hover:underline">About</a>
        <a href="/discography" className="ml-4 text-accent hover:underline">Discography</a>
        <a href="/tour-dates" className="ml-4 text-accent hover:underline">Tour Dates</a>
        <a href="/media" className="ml-4 text-accent hover:underline">Media</a>
        <a href="/merchandise" className="ml-4 text-accent hover:underline">Merchandise</a>
        <a href="/contact" className="ml-4 text-accent hover:underline">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
