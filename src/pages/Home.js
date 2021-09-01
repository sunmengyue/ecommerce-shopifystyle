import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import FeaturedItems from '../components/FeaturedItems';
import NewArrivals from '../components/NewArrivals';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';
import Message from '../components/Message';

const Home = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Navbar />
      <div className="bg-gray-100">
        {loading ? (
          <Loader />
        ) : error ? (
          <Message>{error}</Message>
        ) : (
          <>
            <NewArrivals products={products} />
            <FeaturedItems products={products} />
          </>
        )}
      </div>
    </>
  );
};

export default Home;
