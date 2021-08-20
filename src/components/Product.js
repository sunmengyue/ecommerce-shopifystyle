import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';

const Product = ({ product }) => {
  const MIN = 1;
  const MAX = 5;
  const [rating] = useState(Math.floor(Math.random() * (MAX - MIN + 1) + MIN));
  return (
    <div className="bg-white p-10 flex flex-col m-5 relative">
      <p className="absolute right-4 top-3 text-xs italic text-gray-400">
        {product.category}
      </p>
      <img
        src={product.image}
        height={180}
        width={180}
        className="obj-contain m-auto"
      />
      <h4 className="my-4">{product.title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((star, i) => (
            <StarIcon className="h-5" key={i} />
          ))}
      </div>
      <p className="my-2 text-xs line-clamp-2">{product.description}</p>
      <div className="mb-5">
        <Currency quantity={product.price} currency="USD" />
      </div>
      <button className="mt-auto button border border-black">Add to Bag</button>
    </div>
  );
};

export default Product;
