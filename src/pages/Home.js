import React from 'react';
import FeaturedItems from '../components/FeaturedItems';
import NewArrivals from '../components/NewArrivals';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-gray-100">
      <NewArrivals />
      <FeaturedItems />
      <Footer />
    </div>
  );
};

export default Home;
