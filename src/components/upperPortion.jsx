import React from 'react'
import arrow_downward from "../assets/arrow_downward_alt (1).png"
import { Icon } from '../assets/Icon'
import { Link } from 'react-router-dom';

const Upperportion = ({link}) => {
  return (
    <div className='bg-customWhite'>
      <Link to={link}>
        <button className='mt-10'>
            <img src={arrow_downward} alt="backward_arrow" className='px-4'></img>
            
        </button>
        </Link>
        <div className='flex justify-center'>
            <div>
                <div className='ml-10'>
            <Icon  />
            </div>
            <h1 className='text-customRed  text-7xl font-bold mt-4    text-shadow-sm  font-sans'>Bluud</h1>
            </div>
        </div>
    </div>
  )
}

export default Upperportion