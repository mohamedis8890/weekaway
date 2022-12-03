import React, { useState } from "react";
import {
  FaBars,
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);
  return (
    <div className="flex w-full min-h-[50px] bg-gray-700/80 text-white justify-between items-center absolute z-10">
      <ul className="hidden sm:flex px-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#deals">Deals</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="flex justify-between">
        <FaFacebookF className="mx-4" />
        <FaTwitter className="mx-4" />
        <FaGooglePlusG className="mx-4" />
        <FaInstagram className="mx-4" />
      </div>
      <div className="sm:hidden z-10">
        <FaBars size={20} className="cursor-pointer mx-4" onClick={toggleNav} />
      </div>
      <div
        className={
          nav
            ? `overflow-y-hidden sm:hidden h-screen w-full absolute left-0 top-0 ease-in duration-300 text-gray-300 bg-black/80 flex flex-col px-4 py-7`
            : `absolute top-0 left-[-100%] h-screen ease-in duration-500`
        }
        onClick={toggleNav}
      >
        <ul className="h-full w-full text-center pt-12">
          <li className="text-2xl py-8">
            <a href="/">Home</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#deals">Deals</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
