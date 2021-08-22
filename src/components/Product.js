import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';

const Product = ({ product }) => {
  const MIN = 1;
  const MAX = 5;
  const [rating] = useState(Math.floor(Math.random() * (MAX - MIN + 1) + MIN));
  return (
    <div className="flex flex-col items-center mt-6">
      <div className="bg-white relative w-280 h-280 p-5 flex items-center justify-center">
        <p className="absolute right-4 top-3 text-xs italic text-gray-400">
          {product.category}
        </p>
        <img
          src={product.image}
          height={140}
          width={140}
          className="obj-contain m-auto"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-280 text-center">
        <h4 className="my-4 px-6">{product.title}</h4>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((star, i) => (
              <StarIcon className="h-5" key={i} />
            ))}
        </div>
        <div className="mb-5">
          <Currency quantity={product.price} currency="USD" />
        </div>
      </div>
    </div>
  );
};

export default Product;