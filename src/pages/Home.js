import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ProductFeed from '../components/ProductFeed';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Hero />
      <ProductFeed />
      <Footer />
    </div>
  );
};

export default Home;
