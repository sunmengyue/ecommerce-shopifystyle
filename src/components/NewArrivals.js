import React from 'react';
import Product from './Product';
import Hero from './Hero';

const NewArrivals = ({ products }) => {
  return (
    <div>
      <Hero imgSrc="./images/newArrivals.jpg" title="See New Arrivals" />
      <div className="max-w-screen-2xl m-auto grid grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.slice(5, 13).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
