import React, { useContext, useState } from 'react';
import Currency from 'react-currency-formatter';
import { StarIcon } from '@heroicons/react/solid';
import productContext from '../utils/productContext';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const ProductDetail = ({ match }) => {
  const MIN = 1;
  const MAX = 5;
  const [rating] = useState(Math.floor(Math.random() * (MAX - MIN + 1) + MIN));

  const { products } = useContext(productContext);
  const productId = match.params.id * 1;
  const product = products.find((product) => product.id === productId);

  return (
    <>
      <Header />
      <Navbar />
      <div className="max-w-7xl m-auto">
        <div className="flex flex-col items-center justify-center p-14 md:flex-row md:justify-between md:items-center lg:justify-around">
          <div className="p-4 m-auto w-56 h-56 flex bg-white items-center justify-center">
            <img
              src={product.image}
              alt="product"
              width={180}
              height={180}
              className="obj-contain m-auto"
            />
          </div>
          <div className="ml-5 sm:w-3/4 lg:ml-10">
            <h5 className="font-bold mt-5 tracking-widest lg:text-xl lg:mb-2 ">
              {product.title}
            </h5>
            <div className="mb-3 lg:mb-4">
              <Currency quantity={product.price} currency="USD" />
            </div>
            <div className="flex mb-2 lg:mb-5">
              {Array(rating)
                .fill()
                .map((star, i) => (
                  <StarIcon className="h-5" key={i} />
                ))}
            </div>
            <p>{product.description}</p>
            <div className="mt-3 lg:mt-5">
              <label htmlFor="quantiry" className="uppercase font-light  ">
                Quantity
              </label>
              <select
                name="quantity"
                id="quantity"
                className="border border-gray-600 py-1 px-3 focus:outline-none ml-4 lg:py-2 lg:px-4"
              >
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
              </select>
            </div>
            <button className="uppercase border border-gray-600 py-3 px-7 mt-5 text-white bg-black lg:mt-7 hover:bg-gray-800">
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
