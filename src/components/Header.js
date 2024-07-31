import React from 'react'
import { Link } from 'react-router-dom';
import icon from '../assets/icon.png';

const Firsthalf = () => {
  return (
    <div>
<header className="bg-customWhite  ">
      <div className="container  flex flex-row my-6  ">
        <div className='basis-1/4'>
        <button className='border-2 border-none  rounded-full shadow-md shadow-red-500 '> 
          <Link to="/" className='text-customRed text-3xl font-bold p-4 py-6'>
          <img src={icon} alt="Icon" className=" px-4 m-0 inline " />
            Bluud
          </Link>

        </button>
        </div>
        
       <div className='basis-1/2 '>
        <button className='border-2 border-none  px-3  rounded-2xl shadow-md shadow-red-500 bg-customWhiteInside justify-start'>
          
          <div className='mx-auto my-5 '>
          <Link to="/" className='mx-8 font-medium text-2xl hover:text-3xl hover:underline tracking-wide ' >Home</Link>
          <Link to="/" className='mx-8 font-medium text-2xl hover:text-3xl hover:underline tracking-wide ' >Donate</Link>
          <Link to="/" className='mx-8 font-medium text-2xl hover:text-3xl hover:underline tracking-wide ' >Need Blood</Link>
          <Link to="/" className='mx-8 font-medium text-2xl hover:text-3xl hover:underline tracking-wide ' >Organise camp</Link>
          </div>
          </button>
          </div>
          <div className="basis-1/4 ">
          <button className="border-2 border-none p-4   rounded-full shadow-md shadow-red-500 bg-customWhite">
            <Link to="/login" className="font-medium text-2xl hover:text-gray-400">Login</Link>
          </button>
          <button className="border-2 border-none p-3  rounded-full shadow-md shadow-red-500 bg-customWhite">
            <Link to="/signup" className="font-medium text-2xl hover:text-gray-400">Sign up</Link>
          </button>
        </div>
      </div>
    </header>

    </div>
   
  )
}

export default Firsthalf