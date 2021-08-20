import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-450">
      <img
        src="./images/hero-md.jpg"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
      <div className="flex flex-col h-full items-center justify-center relative ">
        <h1 className="uppercase text-white text-2xl font-bold tracking-wider sm:text-3xl md:text-4xl xl:text-5xl transform md:translate-x-12">
          Find your unique style today
        </h1>
        <button className="cursor-pointer bg-white uppercase text-sm  py-2 px-4 mt-8 focus:outline-none md:text-base md:py-3 md:px-6 hover:bg-gray-100 transform md:translate-x-12 xl:mt-14 xl:py-4 xl:px-8 xl:text-lg">
          shop now
        </button>
      </div>
    </div>
  );
};

export default Hero;
