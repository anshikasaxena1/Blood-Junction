import React from 'react'
import { Link } from 'react-router-dom'
import drop from "../assets/drop.png"
import cardio_load from "../assets/cardio_load.png"

import Benefits from './Benefits'
import Donorslide from './Donorslide'


const Main = () => {
  
  return (
    <div className='flex-grow p-4'>
      <div className='w-full   mx-auto my-0'>
      <div className='container  flex mx-auto mt-28'>
        <div className='w-3/4'>
        <span className='  w-3/4 text-customMaroon  text-7xl font-bold m-1 leading-snug tracking-normal text-shadow-sm'>Maintain a Healthy lifestyle, Donate Blood!</span>
        <span className='flex text-customTextColor font-semibold  font-18px text-2xl tracking-normal'>Did you know that people who donate blood are 88% less likely to suffer a heart attack and 33% <br/>less likely to acquire any type of cardiovascular disease. # When you donate blood, it removes 225 <br/>to 250 milligrams of iron from your body, hence reducing the
           risk of heart disease.
        </span>
        <span className='flex text-customTextColor font-semibold  font-18px text-2xl tracking-normal mx-72'>Be a HERO.</span>
        <div className='container flex mx-auto my-16 mt-14'>
        <Link to="">
        <button className='border-2 border-none m-6 ml-10 px-20 py-3 rounded-xl shadow-md  bg-customBtn text-white font-semibold tracking-wide text-3xl'>
          Get Blood
        </button>
        </Link>
        <button className='border-2 border-none m-6 ml-2 px-4 py-3 rounded-full shadow-md bg-white text-customMaroon font-bold '>
          OR
        </button>
        <button className='border-2 border-none m-6 ml-10 px-20 py-3 rounded-xl shadow-md  bg-customBtn text-white font-semibold tracking-wide text-3xl'>
          Donate Blood
        </button>
        </div>
        </div>
        <img src={drop} alt="Icon" className=" h-auto w-auto m-0 inline   absolute right-2 p-0" />
        </div>
        <div className='mt-14 '>
        <span className='  w-3/4 text-customMaroon mx-24 text-8xl p-8 px-5 font-bold  mt-16 leading-snug tracking-tight text-shadow-sm'>Eligibility Of Blood Donation</span>
        </div>
        <div className='container  flex mx-auto  justify-center items-center'>
          <div className='mt-18'>
          <button className='flex justify-center items-center rounded-full mr-36 h-56 w-56 bg-white shadow-lg '>
            <img src={cardio_load} alt="heartimage" className='h-100px w-100px '/>
            
          </button>
          <span className='font-semibold  text-shadow-sm text-3xl text-center text-customTextColor '><span className='mx-4'>Age between</span><br/> 18 and 60 years</span>
          </div>
          <div className='mt-16'>
          <button className='flex justify-center items-center rounded-full mr-36 h-56 w-56 bg-white shadow-lg '>
            <img src={cardio_load} alt="heartimage" className='h-100px w-100px '/>
            
          </button>
          <span className='font-semibold text-shadow-sm text-3xl tracking-normal text-center text-customTextColor '><span>Haemoglobin</span><br /><span className='mx-2 leading-none'>not less than</span> <br/> <span className='mx-7'>12.5 g/Dl</span></span>
          </div>
          <div className='mt-16'>
          <button className='flex justify-center items-center rounded-full mr-36 h-56 w-56 bg-white shadow-lg '>
            <img src={cardio_load} alt="heartimage" className='h-100px w-100px '/>
            
          </button>
          <span className='font-semibold text-shadow-sm text-3xl  text-customTextColor '>
            Pulse between <br/> <span className='mx-4'>50 and 100/</span><br/>
            <snap className='mx-9'>minute</snap>
          </span>
          </div>
          <div className='mt-16'>
          <button className='flex justify-center items-center rounded-full mr-36 h-56 w-56 bg-white shadow-lg '>
            <img src={cardio_load} alt="heartimage" className='h-100px w-100px '/>
            
          </button>
          <span className='font-semibold text-shadow-sm text-3xl text-center text-customTextColor '>Blood Pressure Systolic<br/> <span className='mx-5'>100-180 mm Hg &</span><br/><span>Diastolic 50-100 mm Hg</span></span>
          </div>
        </div>
        <div className='flex justify-center items-center mt-20'>
        <button className='border-2 border-none  px-20 py-3 rounded-xl shadow-md  bg-customBtn text-white font-semibold tracking-wide text-3xl' >See all info</button>
        </div>
      </div>
      <div className='mt-36 '>
        <span className='w-3/4 text-customMaroon mx-24 text-8xl p-8 px-5 font-bold  mt-16 leading-snug tracking-tight text-shadow-sm'>Benefits of Blood Donation</span>
        <div className='w-3/4 place-content-center mx-auto'>
          <Benefits/>
          <div className='mt-20'>
          <span className='  text-customMaroon flex justify-center items-center text-7xl p-8 px-5 font-bold   leading-snug tracking-tight text-shadow-sm'>Top Donors</span>
          <Donorslide/>
          
          </div>
        </div>
        </div>
    </div>

  )
}

export default Main