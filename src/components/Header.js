import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from "../assets/Icon.jsx";
import { useSelector } from 'react-redux';

const Firsthalf = () => {
  const user = useSelector((state) => state.signup.user);

  // Profile picture URL
  const profilePictureUrl = user?.profilePicture;

  // State for mobile menu toggle
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-customWhite sticky top-0 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between flex-wrap py-4 px-6 md:px-12">
        {/* Logo Section */}
        <div className="flex-shrink-0 border-2 border-none rounded-full shadow-md shadow-red-500 py-2 px-2">
          <Link to="/" className="flex items-center space-x-2">
            <Icon width="50" height="50" />
            <span className="text-customRed text-3xl font-bold">Bluud</span>
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-customRed text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-xl font-medium hover:underline hover:text-customRed transition duration-200">
            Home
          </Link>
          <Link
            to="/donate"
            className="text-xl font-medium hover:underline hover:text-customRed transition duration-200">
            Donate
          </Link>
          <Link
            to="/needblood"
            className="text-xl font-medium hover:underline hover:text-customRed transition duration-200">
            Need Blood
          </Link>
          <Link
            to="/organisecamp"
            className="text-xl font-medium hover:underline hover:text-customRed transition duration-200">
            Organise Camp
          </Link>
        </div>

        {/* User Section */}
        <div className="hidden md:flex items-center space-x-4">
          {user?.firstName ? (
            <Link to="/userProfile" className="flex items-center space-x-2">
              <span className="font-medium text-lg text-customMaroon">
                Welcome, {user.firstName}
              </span>
              {profilePictureUrl && (
                <img
                  src={profilePictureUrl}
                  alt="Profile"
                  className="w-10 h-10 rounded-full shadow-md"
                />
              )}
            </Link>
          ) : (
            <div className="flex space-x-3">
              <Link
                to="/login"
                className="font-medium text-lg px-4 py-2 rounded-full hover:bg-customWhiteInside transition border-2 border-none shadow-md shadow-red-500">
                Login
              </Link>
              <Link
                to="/signup"
                className="font-medium text-lg px-4 py-2 rounded-full hover:bg-customWhiteInside transition border-2 border-none shadow-md shadow-red-500">
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="bg-customWhite border-t border-gray-200 py-4 md:hidden">
          <Link
            to="/"
            className="block text-lg font-medium text-center hover:text-customRed transition duration-200">
            Home
          </Link>
          <Link
            to="/donate"
            className="block text-lg font-medium text-center hover:text-customRed transition duration-200">
            Donate
          </Link>
          <Link
            to="/needblood"
            className="block text-lg font-medium text-center hover:text-customRed transition duration-200">
            Need Blood
          </Link>
          <Link
            to="/organisecamp"
            className="block text-lg font-medium text-center hover:text-customRed transition duration-200">
            Organise Camp
          </Link>

          {/* User Section */}
          <div className="mt-4 text-center">
            {user?.firstName ? (
              <Link to="/userProfile" className="flex flex-col items-center space-y-2">
                <span className="font-medium text-lg text-customMaroon">
                  Welcome, {user.firstName}
                </span>
                {profilePictureUrl && (
                  <img
                    src={profilePictureUrl}
                    alt="Profile"
                    className="w-10 h-10 rounded-full shadow-md mx-auto"
                  />
                )}
              </Link>
            ) : (
              <div className="space-y-2">
                <Link
                  to="/login"
                  className="block font-medium text-lg px-4 py-2 rounded-full hover:bg-customWhiteInside transition border-2 border-none shadow-md shadow-red-500">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block font-medium text-lg px-4 py-2 rounded-full hover:bg-customWhiteInside transition border-2 border-none shadow-md shadow-red-500">
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Firsthalf;
