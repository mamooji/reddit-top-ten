import React, { useState } from "react";
import { MenuItems } from "../Assets/Data/MenuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav
      className="sticky top-0 shadow-lg bg-gradient-to-r from-purple-400 to-blue-400
       sm:pl-4 sm:pr-5 sm:py-2.5 z-10"
    >
      <div className="mx-auto text-white sm:max-w-screen-lg sm:flex sm:justify-between">
        <div className="flex items-center justify-between py-4 pl-4 pr-2 sm:p-0">
          <div className="flex items-center text-xl font-bold">
            Front End Assignment
          </div>
          <div className="sm:hidden">
            <button
              className="block px-4 py-2 transition-all duration-500 ease-in-out rounded cursor-pointer focus:outline-none hover:bg-purple-300 "
              onClick={() => setNavOpen(!navOpen)}
            >
              <FontAwesomeIcon
                icon={!navOpen ? faBars : faTimes}
                className="h-4"
              />
            </button>
          </div>
        </div>
        <div
          className={` ${
            navOpen ? "block" : "hidden"
          } transform transition duration-500 ease-in-out px-4 pt-2 pb-4 sm:flex sm:p-0`}
        >
          {MenuItems.map((item, index) => {
            return (
              <a
                key={index}
                className={`${
                  index === 0 ? "mt-0" : "mt-2"
                } block font-medium rounded px-2 py-1 transition-all duration-500 ease-in-out hover:bg-purple-300 sm:font-normal sm:mt-0 sm:ml-2 `}
                href={item.url}
              >
                {item.title}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
