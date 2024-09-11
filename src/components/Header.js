import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from "../assets/Icon.jsx"

import { useSelector } from 'react-redux';

const Firsthalf = () => {
  const user = useSelector((state) => state.signup.user);
  console.log(user.firstName); // Check the user object in the console
  
  // Directly use the base64 URL for the profile picture
  const profilePictureUrl = user.profilePicture;

  return (
    <div>
      <header className="bg-customWhite sticky top-0 ">
        <div className="container mx-auto flex flex-wrap items-center justify-between py-6 px-4 md:px-8">
          {/* Logo Section */}
          <div className='flex-shrink-0 border-2 border-none rounded-full shadow-md shadow-red-500 py-2 p-2'>
            <Link to="/" className='flex items-center space-x-2'>
            <Icon width="50" height="50" />  
              <span className='text-customRed text-3xl font-bold'>Bluud</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className='hidden md:flex space-x-8 text-xl border-2 border-none rounded-3xl shadow-md shadow-red-500 py-5 px-8'>
            <Link to="/" className='font-medium text-2xl  hover:text-3xl hover:underline tracking-wide text-black transition duration-200'>Home</Link>
            <Link to="/donate" className='font-medium text-2xl  hover:text-3xl hover:underline tracking-wide text-black transition duration-200'>Donate</Link>
            <Link to="/needblood" className='font-medium text-2xl  hover:text-3xl hover:underline tracking-wide text-black transition duration-200'>Need Blood</Link>
            <Link to="/organisecamp" className='font-medium text-2xl  hover:text-3xl hover:underline tracking-wide text-black transition duration-200'>Organise Camp</Link>
          </div>

          {/* User Section */}
          <div className='flex items-center space-x-4'>
            {user.firstName ? (
              <Link to="/userProfile" className="flex items-center space-x-2">
                <span className="font-medium text-xl text-customMaroon">Welcome, {user.firstName}</span>
                {profilePictureUrl && (
                  <img
                    src={profilePictureUrl}
                    alt="Profile"
                    className='w-12 h-12 rounded-full shadow-md'
                  />
                )}
              </Link>
            ) : (
              <div className="flex space-x-3 ">
                <Link to="/login" className="font-medium text-xl  px-6 py-4 rounded-full hover:bg-customWhiteInside transition border-2 border-none shadow-md shadow-red-500 ">Login</Link>
                <Link to="/signup" className="font-medium text-xl  px-6 py-4 rounded-full hover:bg-customWhiteInside transition border-2 border-none shadow-md shadow-red-500">Sign up</Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className='block md:hidden'>
          <nav className='space-y-4 text-center py-4'>
            <Link to="/" className='block text-lg font-medium hover:text-customRed'>Home</Link>
            <Link to="/donate" className='block text-lg font-medium hover:text-customRed'>Donate</Link>
            <Link to="/needblood" className='block text-lg font-medium hover:text-customRed'>Need Blood</Link>
            <Link to="/organisecamp" className='block text-lg font-medium hover:text-customRed'>Organise Camp</Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Firsthalf;
