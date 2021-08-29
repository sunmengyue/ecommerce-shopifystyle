import React from 'react';
import FeaturedItems from '../components/FeaturedItems';
import NewArrivals from '../components/NewArrivals';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="bg-gray-100">
        <NewArrivals />
        <FeaturedItems />
        <Footer />
      </div>
    </>
  );
};

export default Home;
