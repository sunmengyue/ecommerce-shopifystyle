import React, { useState } from 'react';
import { content } from './filterContent';
import { v4 as uuidv4 } from 'uuid';
import { ChevronUpIcon } from '@heroicons/react/solid';
import { ChevronDownIcon } from '@heroicons/react/solid';

const LargeFilters = () => {
  const [selected, setSelected] = useState(null);
  const toggleSelected = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="w-72">
      {content.map((item, idx) => (
        <div
          key={uuidv4()}
          className="border-gray-300 border-t first:border-t-0 p-5"
        >
          <div
            className="flex cursor-pointer items-center"
            onClick={() => toggleSelected(idx)}
          >
            <h5 className="uppercase font-semibold py-3 tracking-widest mr-3">
              {item.filter}
            </h5>
            {selected === idx ? (
              <ChevronUpIcon className="h-6" />
            ) : (
              <ChevronDownIcon className="h-6" />
            )}
          </div>
          <div className={selected === idx ? 'content show' : 'content'}>
            {item.choices.map((choice, idx) => (
              <div key={uuidv4()}>
                <input
                  type="checkbox"
                  id={`choice${idx}`}
                  name={`choice${idx}`}
                  value={choice}
                  className="mr-2"
                />
                <label htmlFor={`choice${idx}`} className="tracking-wide">
                  {choice}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LargeFilters;
