import React from 'react';

const DiscographySection = () => {
  return (
    <section className="prose lg:prose-xl mb-12" id="discography">
      <h2 className="text-2xl font-semibold mb-4">Discography</h2>
      <ul className="list-disc pl-6">
        <li>Supplication (2009)</li>
        <div className="mb-8">
          <iframe 
            title="Supplication"
            style={{ border: 0, width: '100%', height: '42px' }} 
            src="https://bandcamp.com/EmbeddedPlayer/album=2104201203/size=small/bgcol=ffffff/linkcol=0687f5/track=48470394/transparent=true/" 
            seamless
          >
            <a href="https://annapurnaprod.bandcamp.com/album/akhlys-supplication">Akhlys &quot;Supplication&quot; by AKHLYS</a>
          </iframe>
        </div>
        <li>Dreaming I (2015)</li>
        <div className="mb-8">
          <iframe title='The Dreaming I'
            style={{ border: 0, width: '100%', height: '42px' }} 
            src="https://bandcamp.com/EmbeddedPlayer/album=3511125480/size=small/bgcol=ffffff/linkcol=0687f5/track=2845672331/transparent=true/" 
            seamless
          >
            <a href="https://akhlys.bandcamp.com/album/the-dreaming-i">The Dreaming I by Akhlys</a>
          </iframe>
        </div>
        <li>Melinoë (2020)</li>
        <div className="mb-8">
          <iframe title='Melinoë' 
            style={{ border: 0, width: '100%', height: '42px' }} 
            src="https://bandcamp.com/EmbeddedPlayer/album=1421821976/size=small/bgcol=ffffff/linkcol=0687f5/track=558445212/transparent=true/" 
            seamless
          >
            <a href="https://akhlys.bandcamp.com/album/melino">Melinoë by Akhlys</a>
          </iframe>
        </div>
        <li>House of the Black Geminus (2024)</li>
        <div className="mb-8">
          <iframe title='House of the Black Geminus'
            style={{ border: 0, width: '100%', height: '42px' }} 
            src="https://bandcamp.com/EmbeddedPlayer/album=2596157761/size=small/bgcol=ffffff/linkcol=0687f5/track=814129051/transparent=true/" 
            seamless
          >
            <a href="https://akhlys.bandcamp.com/album/house-of-the-black-geminus">House of the Black Geminus by Akhlys</a>
          </iframe>
        </div>
      </ul>
    </section>
  );
}

export default DiscographySection;
