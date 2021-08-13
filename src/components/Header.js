import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const Header = () => {
  const texts = [
    'Free shipping on US over $45!',
    'Zero waste on all packaging',
    'Summer discount up to 30%',
  ];

  // change header text every 3 s
  const [textIdx, setTextIdx] = useState(0);
  const shuffle = useCallback(() => {
    setTextIdx((prevIdx) => (prevIdx === texts.length - 1 ? 0 : prevIdx + 1));
  }, []);
  useEffect(() => {
    let intervalId = setInterval(shuffle, 3000);
    return () => clearInterval(intervalId);
  }, [shuffle]);

  return (
    <header className="text-white bg-yellow-800">
      <div className="flex p-1 justify-between text-sm items-center max-w-2xl m-auto">
        <ChevronLeftIcon className="h-6" />
        <h5>{texts[textIdx]}</h5>
        <ChevronRightIcon className="h-6" />
      </div>
    </header>
  );
};

export default Header;
