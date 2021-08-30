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
          <div className="flex flex-col p-6 space-y-10 bg-white flex-grow m-5 shadow-sm">
            <h1 className="text-3xl border-b pb-4">Your Shopping Bag</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
