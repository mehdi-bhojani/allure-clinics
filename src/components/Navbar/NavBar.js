import { ChevronDown } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import skinServices from "../../shared/SkinServices.json";

const NavBar = () => {
  const [top, setTop] = useState(!window.scrollY);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Track dropdown state

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <nav className={`bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 z-10 ${!top && 'fixed w-full bg-white/60'}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/logo.png"
            className="h-24"
            alt=" Logo"
          />
        </Link>
        <button
          onClick={handleClick}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`${isOpen ? "block" : "hidden"} w-full md:block  md:w-auto`} id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:items-center">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white bg-primary rounded md:bg-transparent md:text-primary md:p-0 md:dark:text-blue-500 dark:bg-primary md:dark:bg-transparent"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Dropdown */}
              {isDropdownOpen && (
                <div className="z-10 font-normal w-full bg-white divide-y divide-gray-100 rounded-lg md:shadow md:w-44 dark:bg-gray-700 dark:divide-gray-600 md:absolute">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    {skinServices.map((service, index) => (
                    <li key={index}>
                      <Link
                        to={service.link}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-bold"
                      >
                        {service.serviceType}
                      </Link>
                    </li>
                    
                    ))}
                  </ul>
                </div>
              )}
            </li>
            <li>
              <HashLink 
              smooth to="/#about"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#faq"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                FAQ
              </HashLink>
            </li>
            <li>
              <a
                href="http://wa.link/1jueny"
                target="_blank"
                rel="noreferrer"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Consult
              </a>
            </li>
            <li>
              <HashLink
                smooth
                to="/#book"
                className="block py-2 px-3 md:px-5 md:py-2 text-gray-900  md:bg-primary rounded-full hover:bg-gray-100 md:hover:bg-primary md:border-0"
              >
                Book Now
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
