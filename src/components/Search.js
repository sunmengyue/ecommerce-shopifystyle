import React, { useContext } from 'react';
import productContext from '../utils/productContext';
import { XIcon, SearchIcon } from '@heroicons/react/outline';

const Search = () => {
  const searchbarData = useContext(productContext);
  const { showSearchBar, setShowSearchBar } = searchbarData;
  const hideSearchBar = () => {
    setShowSearchBar(false);
  };
  return (
    showSearchBar && (
      <div className=" bg-brown-light py-5 px-7">
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
            />
          </div>
        </div>
      </div>
    )
  );
};

export default Search;
