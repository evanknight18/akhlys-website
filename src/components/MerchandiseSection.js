import React from 'react';
import shirtPic from '../assets/images/gallery/housebg-tshirt.jpg';

const MerchandiseSection = () => {
  return (
    <section id="merch" className="mb-2">
      <h2 className="text-2xl font-semibold mb-4">Merchandise</h2>

      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg" 
        style={{ backgroundImage: `url(${shirtPic})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h3 className="text-lg font-semibold mb-2">Akhlys House of the Black Geminus</h3>
          <p className="text-gray-700">House of the Black Geminus merch</p>
          <a href="https://akhlys.bandcamp.com/album/house-of-the-black-geminus" className="custom-button bg-red-950 text-white">Buy Now</a>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <img src="../public/images/merch2.jpg" alt="Merch 2" className="w-full rounded-lg mb-2" />
          <h3 className="text-lg font-semibold mb-2">Dreaming I Vinyl</h3>
          <p className="text-gray-700">Experience the haunting sounds of "The Dreaming I" on vinyl with this special edition release.</p>
          <a href="#" className="custom-button bg-blue-500 text-white">Buy Now</a>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <img src="../public/images/merch3.jpg" alt="Merch 3" className="w-full rounded-lg mb-2" />
          <h3 className="text-lg font-semibold mb-2">Melinoë Poster</h3>
          <p className="text-gray-700">Decorate your space with this exclusive poster featuring artwork from the "Melinoë" album.</p>
          <a href="#" className="custom-button bg-blue-500 text-white">Buy Now</a>
          
        </div>
        <div className="bg-gray-100 p-4 rounded-lg" 
        style={{ backgroundImage: `url(${shirtPic})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h3 className="text-lg font-semibold mb-2">Akhlys House of the Black Geminus</h3>
          <p className="text-gray-700">House of the Black Geminus merch</p>
          <a href="https://akhlys.bandcamp.com/album/house-of-the-black-geminus" className="custom-button bg-red-950 text-white">Buy Now</a>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <img src="../public/images/merch2.jpg" alt="Merch 2" className="w-full rounded-lg mb-2" />
          <h3 className="text-lg font-semibold mb-2">Dreaming I Vinyl</h3>
          <p className="text-gray-700">Experience the haunting sounds of "The Dreaming I" on vinyl with this special edition release.</p>
          <a href="#" className="custom-button bg-blue-500 text-white">Buy Now</a>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <img src="../public/images/merch3.jpg" alt="Merch 3" className="w-full rounded-lg mb-2" />
          <h3 className="text-lg font-semibold mb-2">Melinoë Poster</h3>
          <p className="text-gray-700">Decorate your space with this exclusive poster featuring artwork from the "Melinoë" album.</p>
          <a href="#" className="custom-button bg-blue-500 text-white">Buy Now</a>
          
        </div>
        <div className="bg-gray-100 p-4 rounded-lg" 
        style={{ backgroundImage: `url(${shirtPic})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h3 className="text-lg font-semibold mb-2">Akhlys House of the Black Geminus</h3>
          <p className="text-gray-700">House of the Black Geminus merch</p>
          <a href="https://akhlys.bandcamp.com/album/house-of-the-black-geminus" className="custom-button bg-red-950 text-white">Buy Now</a>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <img src="../public/images/merch2.jpg" alt="Merch 2" className="w-full rounded-lg mb-2" />
          <h3 className="text-lg font-semibold mb-2">Dreaming I Vinyl</h3>
          <p className="text-gray-700">Experience the haunting sounds of "The Dreaming I" on vinyl with this special edition release.</p>
          <a href="#" className="custom-button bg-blue-500 text-white">Buy Now</a>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <img src="../public/images/merch3.jpg" alt="Merch 3" className="w-full rounded-lg mb-2" />
          <h3 className="text-lg font-semibold mb-2">Melinoë Poster</h3>
          <p className="text-gray-700">Decorate your space with this exclusive poster featuring artwork from the "Melinoë" album.</p>
          <a href="#" className="custom-button bg-blue-500 text-white">Buy Now</a>
          
        </div>
      </div>
    </section>
  );
}

export default MerchandiseSection;
