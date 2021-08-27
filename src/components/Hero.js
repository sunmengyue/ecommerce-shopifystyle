import React, { useContext } from 'react';
import productContext from '../utils/productContext';

const Hero = ({ imgSrc, title }) => {
  const productData = useContext(productContext);

  return (
    <div className="relative h-450">
      <img
        src={imgSrc}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
      <div className="flex flex-col h-full items-center justify-center relative ">
        <h1 className="uppercase text-white text-2xl font-bold tracking-wider sm:text-3xl md:text-4xl xl:text-5xl transform md:translate-x-12">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
