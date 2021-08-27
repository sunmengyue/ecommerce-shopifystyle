import React, { useContext, useState } from 'react';
import productContext from '../utils/productContext';
import FeaturedItems from '../components/FeaturedItems';
import NewArrivals from '../components/NewArrivals';
import Footer from '../components/Footer';

const Home = () => {
  const productsData = useContext(productContext);
  const { products } = productsData;
  const [showModal, setShowModal] = useState('false');
  return (
    <div className="bg-gray-100">
      <NewArrivals />
      <FeaturedItems />
      <Footer />
    </div>
  );
};

export default Home;
