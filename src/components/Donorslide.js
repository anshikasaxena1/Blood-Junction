import React from 'react'
import '../scrollbar.css';
import dummyData from "../utils/dummyData.json"
const Donorslide = () => {
  
  return (
    <div>
    <div className='justify-center items-center w-full h-full overflow-x-auto flex flex-nowrap mt-16'>
      <ul className='flex  overflow-x-scroll scrollbar-hide scrollbar-thumb-custom scrollbar-track-custom whitespace-nowrap flex-nowrap'>
        {dummyData.map(user => (
          <li key={user.id} className='mx-4'>
            <div className='h-60 w-56 flex-none  border-customWhite text-white m-2'>
            <img src={user.picture} alt={user.name} className="w-200px h-200px rounded-full mr-10" />
            <span className='text-customMaroon font-semibold text-center mx-10'>
            {user.first_name}  {user.last_name} <br/>
            <span className='mx-10'>
            {user.units} units
            </span>
            </span>
            </div>
          </li>
        ))}
      </ul>
      
      </div>
      <div className='justify-center  items-center mt-14'>
    <button className='mx-96 border-2 border-none  px-12 py-3 rounded-xl shadow-md  bg-customBtn text-white font-semibold tracking-wide text-3xl' >All Donors list</button>
    </div>
      </div>

  )
}

export default Donorslide