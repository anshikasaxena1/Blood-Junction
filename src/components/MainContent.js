import React from 'react'
import { Link } from 'react-router-dom'
import drop from "../assets/drop.png"
import cardio_load from "../assets/cardio_load.png"

import Benefits from './Benefits'
import Donorslide from './Donorslide'

const Main = () => {
  return (
    <div className="flex-grow bg-customWhite p-4 min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center mt-10">
          <div className="lg:w-3/4 p-6 text-center lg:text-left">
            <h1 className="text-customMaroon text-4xl lg:text-7xl font-bold leading-snug tracking-normal text-shadow-sm">
              Maintain a Healthy Lifestyle, Donate Blood!
            </h1>
            <p className="text-customTextColor font-semibold text-lg lg:text-2xl mt-6">
              Did you know that people who donate blood are 88% less likely to suffer a heart attack and 33% less likely to acquire any type of cardiovascular disease? When you donate blood, it removes 225 to 250 milligrams of iron from your body, hence reducing the risk of heart disease.
            </p>
            <p className="text-customTextColor font-semibold text-lg lg:text-2xl mt-4">
              Be a HERO.
            </p>
            <div className="flex flex-col lg:flex-row items-center mt-10">
              <Link to="/needblood">
                <button className="border-none m-2 px-10 py-3 rounded-xl shadow-md bg-customBtn text-white font-semibold tracking-wide text-xl lg:text-3xl">
                  Get Blood
                </button>
              </Link>
              <button className="border-none m-2 px-4 py-3 rounded-full shadow-md bg-white text-customMaroon font-bold">
                OR
              </button>
              <Link to="/donate">
                <button className="border-none m-2 px-10 py-3 rounded-xl shadow-md bg-customBtn text-white font-semibold tracking-wide text-xl lg:text-3xl">
                  Donate Blood
                </button>
              </Link>
            </div>
          </div>
          <img src={drop} alt="Icon" className="h-64 w-64 lg:h-auto lg:w-auto mx-auto lg:absolute lg:right-0" />
        </div>
      </div>

      {/* Eligibility Section */}
      <div className="container mx-auto mt-16">
        <h2 className="text-customMaroon text-4xl lg:text-8xl font-bold leading-snug tracking-tight text-shadow-sm text-center lg:text-left">
          Eligibility of Blood Donation
        </h2>
        <div className="flex flex-wrap justify-center lg:justify-between items-center mt-12">
          {[
            { text: "Age between 18 and 60 years", image: cardio_load },
            { text: "Haemoglobin not less than 12.5 g/Dl", image: cardio_load },
            { text: "Pulse between 50 and 100/minute", image: cardio_load },
            { text: "Blood Pressure Systolic 100-180 mm Hg & Diastolic 50-100 mm Hg", image: cardio_load }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center w-48 lg:w-56 m-4">
              <button className="flex justify-center items-center rounded-full h-32 w-32 lg:h-56 lg:w-56 bg-white shadow-lg">
                <img src={item.image} alt="Icon" className="h-16 w-16 lg:h-24 lg:w-24" />
              </button>
              <span className="font-semibold text-shadow-sm text-lg lg:text-3xl text-customTextColor text-center mt-4">
                {item.text}
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-10">
          <Link
          to="/eligibility"
          >
          <button className="px-10 py-3 rounded-xl shadow-md bg-customBtn text-white font-semibold tracking-wide text-lg lg:text-3xl">
            See all info
          </button>
          </Link>
        </div>
      </div>

      {/* Benefits and Donors Section */}
      <div className="mt-20">
        <h2 className="text-customMaroon text-4xl lg:text-8xl font-bold leading-snug tracking-tight text-shadow-sm text-center lg:mx-24">
          Benefits of Blood Donation
        </h2>
        <div className="w-full lg:w-3/4 mx-auto mt-10">
          <Benefits />
          <div className="mt-20">
            <h2 className="text-customMaroon text-4xl lg:text-7xl font-bold leading-snug tracking-tight text-shadow-sm text-center">
              Top Donors
            </h2>
            <Donorslide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
