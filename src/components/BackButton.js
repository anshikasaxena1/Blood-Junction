import React from 'react'
import { Link } from 'react-router-dom';
import forward_arrow from '../assets/arrow_forward_ios (1).png'
const Backbutton = () => {
  return (
    <div>
      <Link
                  to="/">
      <img src={forward_arrow} alt='forward_arrow' className='col-start-6 col-span-6 border-2 rounded-extra-large shadow-md p-4 m-8'>
      
      </img>
      </Link>
    </div>
  )
}

export default Backbutton