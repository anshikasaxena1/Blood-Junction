import React from 'react'
import Upperportion from './upperPortion'
import PhoneInput from 'react-phone-input-2';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className='w-full bg-customWhite'>
      <div>
      <Upperportion link={"/"}/>
      </div>
        <div className='flex justify-center pb-100px '>
          <div className='mt-10'>
        <label className="text-customMaroon  font-bold   ">Phone*</label>
            <PhoneInput
              country={'in'}
              inputClass="w-full px-3 py-2 rounded border border-customMaroon shadow-sm focus:outline-none focus:ring-customMaroon focus:border-customMaroon sm:text-sm"
              containerClass="w-full"
            />
            <Link to={"/enterOTP"} >
            <button className=' border-2 mt-10 border-none  px-12 py-2 mx-10 rounded-xl shadow-md  bg-customBtn text-white font-semibold tracking-wide text-3xl' >Send OTP</button>
            </Link>
            <div className="border-t-2 border-dashed  border-gray-400 min-w-full h-1 py-5 mt-14"></div>
            <Link to={"/HospitalLogin"}>
            <button className='w-full border-2 mt-6  block border-customRed  px-12 py-1 rounded-full shadow-md   text-customMaroon font-semibold tracking-wide text-3xl' >Hospital Login</button>
            </Link>
            <button className='border-2  mt-6 block  m-6 mx-32 px-4 py-3 rounded-full shadow-md bg-white text-customMaroon font-bold '>
          OR
        </button>
        <Link to={"/DonationCampLogin"}>
        <button className='w-full mt-6 border-2 border-customRed block  px-12 py-1 rounded-full shadow-md   text-customMaroon font-semibold tracking-wide text-3xl' >Donation Camps</button>
        </Link>
            </div>
            </div>
      </div>
  )
}

export default Login