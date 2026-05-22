import React from 'react';

// This component accepts name, distance, and image as props
const PlanetCard = ({ name, distance, image }) => {
  return (
    <figure className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-transform duration-300 hover:-translate-y-1 m-0">
      <div className="w-full h-44 bg-black overflow-hidden">
        <img 
          src={image} 
          alt={`Visual representation of the planet ${name}`} 
          className="w-full h-full object-cover" 
        />
      </div>
      <figcaption className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
        <p className="text-sm text-gray-500 m-0">{distance}</p>
      </figcaption>
    </figure>
  );
};

export default PlanetCard;