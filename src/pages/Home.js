import React from 'react';
import FeaturedItems from '../components/FeaturedItems';
import NewArrivals from '../components/NewArrivals';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Home = ({ products }) => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="bg-gray-100">
        <NewArrivals products={products} />
        <FeaturedItems products={products} />
      </div>
    </>
  );
};

export default Home;
