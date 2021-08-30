import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Search from './Search';
import {
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
} from '@heroicons/react/outline';

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const history = useHistory();
  const toCheckout = () => {
    history.push('/checkout');
  };

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };
  return (
    <div className="bg-brown-light px-10 top-0 sticky z-50">
      <nav className="py-5 ">
        <div className="max-w-6xl m-auto flex justify-between items-center ">
          {/* left */}
          <div>
            <div className="flex justify-between md:hidden">
              <MenuIcon className="h-6 mr-2 cursor-pointer" />
              <button onClick={toggleSearchBar}>
                <SearchIcon className="h-6 cursor-pointer" />
              </button>
            </div>
            <ul className="hidden md:flex justify-between items-center font-semibold space-x-8 text-sm">
              <li className="link tracking-wide">Shop All</li>
              <li className="link tracking-wide">About Us</li>
            </ul>
          </div>
          {/* Middle */}
          <div className="cursor-pointer">
            <h4 className="uppercase font-bold tracking-wider">
              <Link to="/">mstyle</Link>
            </h4>
          </div>
          {/* right */}
          <div className="relative md:hidden" onClick={toCheckout}>
            <ShoppingBagIcon className="h-6 cursor-pointer" />
            <p className="absolute -top-2 right-0 text-xs">0</p>
          </div>
          <ul className="hidden md:flex justify-between items-center font-semibold space-x-8 text-sm">
            <li className="link">
              <button onClick={toggleSearchBar}>
                <SearchIcon className="h-6" />
              </button>
            </li>
            <li className="link">Sign In</li>
            <li className="link" onClick={toCheckout}>
              Bag (0)
            </li>
          </ul>
        </div>
      </nav>
      {showSearchBar && (
        <Search
          showSearchBar={showSearchBar}
          setShowSearchBar={setShowSearchBar}
        />
      )}
    </div>
  );
};

export default Navbar;
