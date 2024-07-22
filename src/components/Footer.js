import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <div className=" w-auto mt-52 pb-60 h-[500px] bg-rose-300 shadow border border-red-700/opacity-50" >
        <div class="grid grid-cols-2 divide-x-[3px] divide-black divide-h-">
  <div> 
    <h1 className='text-contactText font-semibold text-4xl font-sans p-10 mt-4 tracking-wide'>Contact us</h1>
    <form className='mx-10 '>
      <p>Name*</p>
      
      <input type="text" className='rounded-2xl' placeholder='First name '/>
      <input type="text" className='rounded-2xl mx-5' placeholder='Last name'/>
      <p>Email*</p>
      <input type="email" className='block rounded-2xl ' placeholder='Your email address' />
      Query*
      <textarea type="text" className='block rounded-2xl' placeholder='Questions you have!' rows={4}
        cols={40}/>
        <div className='flex justify-center mt-5' >
      <button className=' text-white text-xl py-2 px-20 bg-red-950 block rounded-2xl tracking-wide font-semibold  '>Continue</button>
      </div>
    </form>
  </div>
  <div className='grid grid-cols-2 gap-4'>
    <div>
      <h1 className='text-contactText font-semibold text-xl font-sans p-10 mt-24 tracking-wide' >Sitemap</h1>
      <ul className='px-11 text-customTextColor space-y-4'>
        <li><Link to="/"   >Home</Link></li>
        <li><Link to="/"   >Donate</Link></li>
        <li><Link to="/"   >Need Blood</Link></li>
        <li><Link to="/"   >Organise Camp</Link></li>
      </ul>
    </div>
    <div>
      <h1 className='text-contactText font-semibold text-xl font-sans  pt-10 mt-24 tracking-wide'>More</h1>
      <ul className=' text-customTextColor space-y-4 mt-10'>
        <li>Careers</li>
      </ul>

      

    </div>
  </div>
  
</div>
<div className='flex justify-end'>
  <span>Made By </span>
</div>

</div>
  )
}

export default Footer