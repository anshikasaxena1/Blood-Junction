import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import { GoldStar } from '../assets/GoldStar.jsx';
import { Link } from 'react-router-dom';

const Thanks = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-customWhite">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center mt-28">
        <div className="flex flex-col items-center">
          <GoldStar />
          <h1 className="text-customMaroon text-7xl font-bold leading-snug tracking-normal text-shadow-md mt-4">
            Let's Go
          </h1>
          <h1 className="text-customMaroon text-3xl font-bold leading-snug tracking-normal text-shadow-md mt-2">
            You are in the waitlist! Call Us and Confirm now
          </h1>
        </div>
        <Link to={'/'} >
        <button
          type="button"
          className="px-4 py-2 mt-4 bg-customBtn text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Home
        </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Thanks;
