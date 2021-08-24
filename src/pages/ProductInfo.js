import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import ProductInfoNav from '../components/ProductInfoNav';
import productContext from '../utils/productContext';

const ProductInfo = (props) => {
  const productData = useContext(productContext);
  const { products } = productData;

  const productId = props.match.params.id;
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`);
  });

  return (
    <div className="max-w-7xl m-auto">
      <ProductInfoNav />
    </div>
  );
};

export default ProductInfo;
