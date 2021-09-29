import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { content } from './filterContent';

const Filters = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      // if selected is already active, then close it
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div>
      {content.map((item, idx) => (
        <div key={idx} className="mb-3">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => toggle(idx)}
          >
            <h3 className="tracking-wider mr-3 mb-1 uppercase font-semibold">
              {item.filter}
            </h3>
            <span>
              {selected === idx ? (
                <ChevronUpIcon className="h-6" />
              ) : (
                <ChevronDownIcon className="h-6" />
              )}
            </span>
          </div>
          <div className={selected === idx ? 'content show' : 'content'}>
            {item.choices.map((choice, idx) => (
              <div key={uuidv4()}>
                <input
                  type="checkbox"
                  id={`choice${idx}`}
                  name={`choice${idx}`}
                  value={choice}
                />
                <label className="ml-2 cursor-pointer" htmlFor={`choice${idx}`}>
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

export default Filters;
