import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const Header = () => {
  const [text, setText] = useState([]);
  return (
    <header className="text-white bg-yellow-800">
      <div className="  flex p-1 justify-between text-sm items-center max-w-2xl m-auto">
        <ChevronLeftIcon className="h-6" />
        <h5>Free shipping on US over $45!</h5>
        <ChevronRightIcon className="h-6" />
      </div>
    </header>
  );
};

export default Header;
