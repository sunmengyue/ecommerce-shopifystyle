import React, { useContext } from 'react';
import productContext from '../utils/productContext';
import Product from './Product';

const ProductFeed = () => {
  const productsData = useContext(productContext);
  const { products } = productsData;
  return (
    <div className="bg-gray-100">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductFeed;
