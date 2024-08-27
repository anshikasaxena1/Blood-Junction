import React from 'react'
import { Link } from 'react-router-dom';
const IdPass = ({id}) => {
  return (
    <div className='bg-customWhite'>

    
    <div className='flex flex-col   min-h-screen'>
      <div className="w-full max-w-md  mx-auto"> 
        <label className="text-customTextColor font-bold">{id} Id</label>
        <input 
          type="text"
          className='w-full mt-2  block rounded-2xl border-1 border-pink-800 focus:border-customMaroon focus:outline-none px-4 py-2'
          placeholder={`${id} Id given by us`}
        />
        <label className="text-customTextColor font-bold">Password</label>
        <input 
          type="password"
          className='w-full mt-2 block rounded-2xl border-1 border-pink-800 focus:border-customMaroon focus:outline-none px-4 py-2'
          placeholder='Password given by us'
        />
        <div className='flex justify-center'>
          <Link to={"/enterOTP"} >
          <button className='border-2 mt-10 border-none px-12 py-2 mx-14 rounded-xl shadow-md bg-customBtn text-white font-semibold tracking-wide text-3xl'>
            Login
          </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default IdPass
