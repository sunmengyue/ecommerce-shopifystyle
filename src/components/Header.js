import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import '../App.css';
import { v4 as uuidv4 } from 'uuid';

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

  // Go to next/previous text
  const handleNext = () => {
    setTextIdx((prev) => (prev === texts.length - 1 ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    setTextIdx((prev) => (prev === 0 ? texts.length - 1 : prev - 1));
  };

  return (
    <header className="text-white bg-yellow-800">
      <div className="flex p-1 justify-between text-sm items-center max-w-2xl m-auto">
        <ChevronLeftIcon className="h-6 cursor-pointer" onClick={handleNext} />
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={uuidv4()}
            addEndListener={(node, done) => {
              node.addEventListener('transitionend', done, false);
            }}
            classNames="transition"
          >
            <h5>{texts[textIdx]}</h5>
          </CSSTransition>
        </SwitchTransition>
        <ChevronRightIcon
          className="h-6 cursor-pointer"
          onClick={handlePrevious}
        />
      </div>
    </header>
  );
};

export default Header;
