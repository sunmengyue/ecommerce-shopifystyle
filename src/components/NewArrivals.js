import React, { useContext } from 'react';
import productContext from '../utils/productContext';
import Product from './Product';
import Hero from './Hero';

const NewArrivals = () => {
  const productsData = useContext(productContext);
  const { products } = productsData;
  return (
    <div>
      <Hero imgSrc="./images/newArrivals.jpg" title="See New Arrivals" />
      <div className="max-w-7xl m-auto grid grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.slice(5, 13).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
