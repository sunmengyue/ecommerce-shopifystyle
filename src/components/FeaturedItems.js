import React, { useContext, useState } from 'react';
import productContext from '../utils/productContext';
import Hero from './Hero';
import Product from './Product';

const FeaturedItems = () => {
  const productsData = useContext(productContext);
  const { products } = productsData;
  return (
    <div>
      <Hero imgSrc="./images/featured.jpg" title="Build your own style" />
      <div className="max-w-7xl m-auto grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.slice(0, 4).map((product) => (
          <Product key={product.id} product={product} />
        ))}
        {products.slice(13, 20).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedItems;
