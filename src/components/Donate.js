import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
import { Icon } from "../assets/Icon.jsx"
import { Link } from 'react-router-dom'


const Donate = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-customWhite">
    <Header />
   
    <div className="w-full min-h-screen bg-customWhite flex flex-col items-center">
      {/* Header Section */}
      <header className="text-center mt-12">
        <h1 className="text-customMaroon text-6xl font-bold text-shadow-md leading-snug tracking-wide mb-4">
          Donate and Save a Life
        </h1>
        <p className="text-gray-700 text-xl font-medium">Your 1 time blood donation can save 3 lives!</p>
        <p className="text-customMaroon text-xl font-bold  mt-2">You’re a Hero</p>
      </header>

      {/* Main Section */}
      <main className="mt-16 flex flex-col items-center space-y-12">
        <div className="flex justify-center space-x-8">
          {/* Find Donation Camps */}
          <div className=" bg-customWhite  rounded-lg p-6 text-center w-auto">

          <div className='flex border-2 p-4 container shadow-lg border-customRed rounded-md h-auto '>
            <div className='w-3/4 text-left'>
          <h2 className="text-customMaroon text-shadow-md  text-4xl font-bold m-4 ">Find <p className=''>Donation</p> Camps</h2>
          </div>
            <div className="mb-4">
              {/* Placeholder for Image/Icon */}
              <div className="  h-auto w-auto mx-auto rounded-md">
              <Icon  />
              </div>
              </div>
            </div>
            <Link to={'/bloodcamps'} >
            <button className="bg-customBtn text-white my-4 px-4 py-2 rounded-md shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 flex items-center justify-center w-full">
              Donate and save lives →
            </button>
            </Link>
          </div>

          {/* Find Hospitals Nearby */}
          <div className=" bg-customWhite  rounded-lg p-6 text-center w-auto">

          <div className='flex border-2 p-4 container shadow-lg border-customRed rounded-md h-auto '>
            <div className='w-3/4 text-left'>
          <h2 className="text-customMaroon text-shadow-md text-4xl font-bold m-4 ">Find <p className=''>Hospitals</p> Nearby</h2>
          </div>
            <div className="mb-4">
              {/* Placeholder for Image/Icon */}
              <div className="  h-auto w-auto mx-auto rounded-md">
              <Icon  />
              </div>
              </div>
            </div>
            <Link to={"/Hospitals"}>
            <button className="bg-customBtn  text-white my-4 px-4 py-2 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 flex items-center justify-center w-full">
              Donate and save lives →
            </button>
            </Link>
          </div>
        </div>
        <div className="border-t-2 border-dashed  border-customRed w-full h-1 py-5 mt-14"></div>



        {/* Help Zone Section */}
        <section className="w-full mt-16 px-8">
          <h2 className="text-customMaroon text-4xl font-bold text-shadow-md text-center mb-8">Help Zone</h2>
          <p className="text-gray-700 text-lg font-medium text-center mb-8">You are asked for help! Donate and save someone’s life</p>
          <div className="bg-white shadow-xl rounded-lg p-6 flex items-center justify-between">
            {/* Donation Details */}
            <div className="flex space-x-8">
              <div className="flex flex-col">
                <span className="text-customMaroon text-lg font-bold">Type of Donation</span>
                <span className="text-customMaroon text-lg">Whole Blood Donation</span>
              </div>
              <div className="flex flex-col">
                <span className="text-customMaroon text-lg font-bold">Location</span>
                <span className="text-customMaroon text-lg">Allen Becker Hospital, Street 5, UK</span>
              </div>
              <div className="flex flex-col">
                <span className="text-customMaroon text-lg font-bold">Request time</span>
                <span className="text-customMaroon text-lg">18 July 2024 at 9:30 p.m.</span>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="bg-customBtn ml-4 text-white px-4 py-2 rounded-md shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
                Approve
              </button>
              <button className="bg-gray-400 text-white px-4 py-2 rounded-md shadow hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400">
                Reject with a message
              </button>
            </div>
          </div>
        </section>
      </main>
      <div className="border-t-2 border-dashed  border-customRed w-3/4 h-1 py-5 mt-28"></div>
    </div>
    
    <Footer/>
  </div>
  )
}

export default Donate