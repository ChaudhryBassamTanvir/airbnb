import React from 'react';
import Airbnb from './Airbnb'; // Airbnb logo component
import { CiGlobe } from "react-icons/ci";


const Navbar = () => {
  return (
      // {/* Left Section - Logo */}
    <nav className="flex justify-between items-center p-6 ">
      <div className="lg:ml-14 md:ml-9 ml-5">
        <Airbnb />
      </div>

      {/* Center Section - Navigation Links */}
      <div className="flex space-x-8 lg:ml-4">
        <a href="#" className="text-gray-800 hover:text-black">Stays</a>
        <a href="#" className="text-gray-800 hover:text-black">Experience</a>
      </div>

      {/* Right Section - 'Airbnb your home' and Language Icon */}
      <div className="flex items-center space-x-4 lg:mr-20">
        <a href="#" className="text-gray-800 hover:text-black">Airbnb your home</a>
        <button className="text-gray-800 hover:text-black">
          <i className=" text-black font-bold fas fa-globe"><CiGlobe size={20} /></i> {/* Assuming you're using Font Awesome for the language icon */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
