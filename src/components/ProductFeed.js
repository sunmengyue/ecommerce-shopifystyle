import React, { useContext } from 'react';
import productContext from '../utils/productContext';
import Product from './Product';

const ProductFeed = () => {
  const productsData = useContext(productContext);
  const { products } = productsData;

  return (
    <div className="bg-gray-100  max-w-8xl m-auto grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.slice(0, 4).map((product) => (
        <Product key={product.id} product={product} />
      ))}
      <div className="relative col-span-full h-300">
        <img
          src="./images/division.jpg"
          alt="division"
          className="absolute w-full h-full inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-gray-800 bg-opacity-40"></div>
      </div>
      <div className="md:col-span-2">
        {products.slice(4, 5).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      {products.slice(5).map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductFeed;
