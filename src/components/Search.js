import React, { useContext, useState } from 'react';
import productContext from '../utils/productContext';
import { XIcon, SearchIcon } from '@heroicons/react/outline';

const Search = () => {
  const searchbarData = useContext(productContext);
  const { showSearchBar, setShowSearchBar } = searchbarData;
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const hideSearchBar = () => {
    setShowSearchBar(false);
  };
  const deleteSearch = () => {
    setText('');
  };

  return (
    showSearchBar && (
      <div className=" bg-brown-light py-5  border-t-2 border-gray-900">
        <div className="flex items-center">
          <button className="mr-8 cursor-pointer" onClick={hideSearchBar}>
            <XIcon className="h-6" />
          </button>
          <div className="flex items-center flex-grow">
            <SearchIcon className="h-6" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent focus:outline-none ml-3 placeholder-gray-500 text-sm font-light w-full "
              onChange={handleChange}
              value={text}
            />
          </div>
          {text !== '' && (
            <p className="text-sm font-medium" onClick={deleteSearch}>
              Clear
            </p>
          )}
        </div>
      </div>
    )
  );
};

export default Search;
