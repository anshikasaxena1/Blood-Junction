// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/icon.png';

const Header = () => {
  return (
    <header className="bg-customWhite h-28">
      <div className="container  flex mx-auto  ">
        <button className='border-2 border-none m-6 ml-2 px-4 py-1 rounded-full shadow-md shadow-red-500'> 
          <Link to="/" className='text-customRed text-3xl font-bold'>
          <img src={icon} alt="Icon" className=" px-4 m-0 inline " />
            Bluud
          </Link>

        </button>
        
       
        <button className='border-2 border-none my-6 px-3 mx-auto  rounded-2xl shadow-md shadow-red-500 bg-customWhiteInside justify-self-center'>
          <div className='mx-28 my-5 '>
          <Link to="/" className='mx-8 font-medium text-2xl hover:text-3xl hover:underline tracking-wide   ' >Home</Link>
          <Link to="/" className='mx-8 font-medium text-2xl hover:text-3xl hover:underline tracking-wide ' >Donate</Link>
          <Link to="/" className='mx-8 font-medium text-2xl hover:text-3xl hover:underline tracking-wide ' >Need Blood</Link>
          <Link to="/" className='mx-8 font-medium text-2xl hover:text-3xl hover:underline tracking-wide ' >Organise camp</Link>
          </div>
          </button>
          <div className="ml-auto  flex space-x-4">
          <button className="border-2 border-none my-6 px-4 py-2 rounded-full shadow-md shadow-red-500 bg-customWhite">
            <Link to="/login" className="font-medium text-2xl hover:text-gray-400">Login</Link>
          </button>
          <button className="border-2 border-none my-6 px-2 py-1 rounded-full shadow-md shadow-red-500 bg-customWhite">
            <Link to="/signup" className="font-medium text-2xl hover:text-gray-400">Sign up</Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
