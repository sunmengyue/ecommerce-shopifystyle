import React, { useState, useEffect } from 'react';
import { AdjustmentsIcon } from '@heroicons/react/solid';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import Loader from '../components/Loader';
import { listProducts } from '../actions/productActions';

const ShopAll = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  let options = [
    'Price, hight to low',
    'Price, low to high',
    'Alphabetically, A - Z',
    'Rating, high to low',
    'Rating, low to high',
  ];
  const [option, setOption] = useState('');

  return (
    <div className="max-w-7xl m-auto p-7">
      <h2 className="h2 text-brown text-center">All Products</h2>
      <div className="flex justify-between mt-8">
        <button className="py-2 px-6 border border-black">
          <AdjustmentsIcon className="h-6" />
        </button>
        <div className="flex items-center">
          <p className="uppercase font-semibold tracking-widest mr-2">sort:</p>
          <select
            name="sort"
            id="sort"
            value={option}
            onChange={(e) => {
              setOption(e.target.value);
            }}
            className="tracking-wide border border-black py-2 px-3 focus:outline-none cursor-pointer"
          >
            {options.map((option) => (
              <option key={uuidv4()} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="max-w-screen-2xl m-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5">
        {loading ? (
          <Loader />
        ) : error ? (
          <div className="error_msg">{error}</div>
        ) : (
          products.map((product) => <Product product={product} />)
        )}
      </div>
    </div>
  );
};

export default ShopAll;
