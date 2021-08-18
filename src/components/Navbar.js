import React from 'react';
import {
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
} from '@heroicons/react/outline';

const Navbar = () => {
  return (
    <nav className="py-5 px-7 bg-brown-light">
      <div className="max-w-6xl m-auto flex justify-between items-center ">
        {/* left */}
        <div>
          <div className="flex justify-between md:hidden">
            <MenuIcon className="h-6 mr-2 cursor-pointer" />
            <SearchIcon className="h-6 cursor-pointer" />
          </div>
          <ul className="hidden md:flex justify-between items-center font-semibold space-x-8 text-sm">
            <li className="link tracking-wide">Shop all</li>
            <li className="link tracking-wide">Featured items</li>
            <li className="link tracking-wide">About us</li>
          </ul>
        </div>
        {/* Middle */}
        <div className="cursor-pointer">
          <h4 className="uppercase font-bold tracking-wider">mstyle</h4>
        </div>
        {/* right */}
        <div className="relative md:hidden">
          <ShoppingBagIcon className="h-6 cursor-pointer" />
          <p className="absolute -top-2 right-0 text-xs">0</p>
        </div>
        <ul className="hidden md:flex justify-between items-center font-semibold space-x-8 text-sm">
          <li className="link">
            <SearchIcon className="h-6" />
          </li>
          <li className="link">Sign In</li>
          <li className="link">Bag (0)</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
