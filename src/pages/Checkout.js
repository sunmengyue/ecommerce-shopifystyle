import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Checkout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="bg-gray-100">
        <div className="max-w-screen-2xl m-auto">
          {/* left */}
          <div className="relative h-250">
            <img
              src="./images/checkout.jpg"
              alt="checkout"
              className="absolute"
            />
          </div>
          {/* right */}
        </div>
      </div>
    </>
  );
};

export default Checkout;
