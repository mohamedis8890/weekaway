import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { BsChatSquareDots } from "react-icons/bs";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <BsChatSquareDots size={30} className="text-primairy-dark mr-2" />
        <h1 className="text-gray-700 text-xl font-bold">WEEKAWAY</h1>
      </div>
      <div className="flex">
        <div className="hidden md:flex items-center px-6">
          <AiOutlineClockCircle size={20} className="mr-2 text-primairy-dark" />
          <p className="text-gray-800 text-sm">9AM - 5PM</p>
        </div>
        <div className="hidden md:flex items-center px-6">
          <AiFillPhone size={20} className="mr-2 text-primairy-dark" />
          <p className="text-gray-800 text-sm">1-888-817-1234</p>
        </div>
        <button>Get A FREE Qute</button>
      </div>
    </div>
  );
};

export default TopBar;
