import React from 'react'
import blurDrop from "../assets/random pic 1.png"
import PhoneInput from 'react-phone-input-2';
const CampDetails = () => {
  return (
    <div>
        <div className='container  p-4 ' >
    
    <label className='mb-2 mt-8 text-customTextColor font-bold p-8'>Event Name*</label>
    <div className='w-1/2 mx-8 '>
    <input
    type="text"
    name="event name"
    placeholder='Name your event in short like Simon’s Blood Drive'
    required
    className=" px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
    </div>
    
    <div className='container flex gap-4 p-8'>
      <div className='w-1/6 mr-4'>
      <label className=" mb-2 text-customTextColor font-bold">Date of Event*</label>
      <div className="flex space-x-2 ">
        <input
          type="text"
          name="day"
          placeholder="DD"
          maxLength="2"
          required
          className="w-16 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <input
          type="text"
          name="month"
          placeholder="MM"
          maxLength="2"
          required
          className="w-16 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <input
          type="text"
          name="year"
          placeholder="YYYY"
          maxLength="4"
          required
          className="w-16 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        </div>
        </div>
        <div className='1/6 px-4'>
        <label className='text-customTextColor font-bold  '>Time*</label>
        <div className="flex space-x-2 w-60 ">
        <input
          type="time"
          name="from"
          placeholder="From"
          maxLength="2"
          required
          className="w-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <input
         type="time"
          name="to"
          placeholder="To"
          maxLength="2"
          required
          className="w-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        </div>
        </div>
        </div>
        

    <div className='container flex '>
      <div className='w-1/2 p-8' >
   
      <label className='text-customTextColor font-bold mt-4'>Venue Address*</label>
      <div className='w-1/2'>
    <input
              type="address"
              name="address"
              placeholder='Address where the Camp is being organized' 
              required
              className=" block w-full  px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
    </div>
    <label className='text-customTextColor font-bold'>Venue's Google Maps Link*</label>     
    <textarea type="text" className='block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' placeholder='Go the place where the camp is going to set up and Enable location services in your mobile. Open Google maps press share button and share  the link to your exact same location where you are standing.' rows={4}
        cols={80}/>
    
    <label className='text-customTextColor font-bold'>Organizer's Name*</label> 
    <div className='w-1/2'>
    <input
              type="text"
              name="lastName"
              placeholder='Name of the person organizing the camp' 
              required
              className=" block w-full  px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
    </div>
    <label className='text-customTextColor font-bold'>Contact Number*</label> 
    <div className='w-1/2'>
    <PhoneInput
              country={'in'}
              
              inputClass="w-full block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              
            />
    </div>
    <label className='text-customTextColor font-bold'>Organiser's Email*</label> 
    <div className='w-1/2'>
    <input
              type="email"
              name="email"
              placeholder='Purpose of the camp in one line' 
              required
              className=" block w-full  px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
    </div>
    <label className='text-customTextColor font-bold'>Expected Number of Donors (In numeric value)*</label> 
    <div className='w-1/2'>
    <input
              type="number"
              name="number"
              placeholder='Expected Number of Donors in Numbers i.e. 1 , 100 or 10000' 
              required
              className=" block w-full  px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
    </div>

    <div className="border-t-2 border-dashed border-customRed min-w-full h-1 py-5 mt-14"></div>
        

   
    </div>
    <div className="flex-grow flex justify-end w-1/4">
      {/* Image container */}
      <div>
        <img src={blurDrop} alt="drop" className="w-[490px] h-[500px] object-cover"/>
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default CampDetails