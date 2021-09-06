import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Search from './Search';
import {
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { logout } from '../actions/userActions';

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);

  const history = useHistory();
  const toCart = () => {
    history.push('/cart');
  };

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    setShowDropdown(false);
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
          <div className="relative md:hidden" onClick={toCart}>
            <ShoppingBagIcon className="h-6 cursor-pointer" />
            <p className="absolute -top-2 right-0 text-xs">0</p>
          </div>
          <ul className="hidden md:flex justify-between items-center font-semibold space-x-8 text-sm">
            <li className="link">
              <button onClick={toggleSearchBar}>
                <SearchIcon className="h-6" />
              </button>
            </li>
            {userInfo ? (
              <div className="flex flex-col">
                <li className="uppercase flex">
                  <p className="mr-1">{userInfo.name}</p>
                  {!showDropdown ? (
                    <ChevronDownIcon
                      className="h-5 cursor-pointer"
                      onClick={() => {
                        setShowDropdown(true);
                      }}
                    />
                  ) : (
                    <ChevronUpIcon
                      onClick={() => {
                        setShowDropdown(false);
                      }}
                      className="h-5 cursor-pointer"
                    />
                  )}
                </li>
                {showDropdown && (
                  <ul className="absolute mt-6 bg-brown-light p-5 space-y-4 ">
                    <li className="link">Profile</li>
                    <li className="link" onClick={logoutHandler}>
                      Logout
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <Link to="/login">
                <li className="link">Sign In</li>
              </Link>
            )}

            <li className="link" onClick={toCart}>
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
