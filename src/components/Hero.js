import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-250">
      <img
        src="./images/hero-md.jpg"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default Hero;
