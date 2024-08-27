import React from 'react'
import drop from "../assets/drop.png"
import arrow_downward from "../assets/arrow_downward_alt (1).png"
import { Link } from 'react-router-dom';


const LayerHeader = ({link}) => {
  return (
    <div className='w-auto h-[250px] bg-customWhite '>
      <Link to={link}>
        <button className='mt-10'>
            <img src={arrow_downward} alt="backward_arrow" className='px-4'></img>
            
        </button>
        </Link>
      <div className='relative m-0 opacity-25'>
        <div className='absolute top-0 right-0 flex   '>
        <span className='text-customMaroon text-4xl font-bold mt-24 tracking-wide'>Bluud</span>
        <img src={drop} alt='drop' className='object-cover  px-0  mt-5  h-48 transform translate-x-1/2 '/>

        </div>
      </div>
    </div>
  )
}

export default LayerHeader