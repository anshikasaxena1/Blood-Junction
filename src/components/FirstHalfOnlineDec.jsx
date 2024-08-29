import React from 'react'
import PhoneInput from 'react-phone-input-2';
import blurFeeding from "../assets/breastfeeding (1).png"
const FirstHalfOnlineDec = () => {
  return (
    <div>
        <div className='ml-10 right-0  w-2/3 '>
        <h1 className='text-customMaroon mx-10  text-7xl font-bold  leading-snug tracking-normal text-shadow-md'>Online Declaration</h1>
        <h1 className='text-customMaroon text-shadow-sm  mx-10 font-bold'>You have to fill this undertaking online to be able to donate anywhere and have a record in our system.</h1>
        <div className='max-w-xl mx-auto p-8'>
        <p className='font-medium text-customTextColor' >Emergency Contact Name*</p>
      
        <input type="text" className='rounded-md shadow-md' placeholder='First name '/>
        <input type="text" className='rounded-md mx-5 shadow-md' placeholder='Last name'/>
        </div>

        <div className='container flex '>
      <div className='w-1/2 px-8' >

      <label className='text-customTextColor font-bold'>Phone*</label> 
    <div className='w-1/2 mb-4'>
    <PhoneInput
              country={'in'}
              
              inputClass="w-full block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              
            />
    </div>
    <label className='text-customTextColor font-bold mt-4'>Email*</label> 
    <div className='w-1/2 mb-4'>
    <input
              type="email"
              name="email"
              placeholder='Your email address' 
              required
              className=" block w-full  px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
    </div>

    <div className='container flex gap-4 py-8 mb-4'>
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
        <label className='text-customTextColor font-bold  '>Weight*</label>
        <div className="flex space-x-2 w-60 ">
        <input
          type="Weight"
          
          placeholder="Your weight"
          maxLength="3"
          required
          className="w-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        
        </div>
        </div>
        </div>
        
   
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
        <img src={blurFeeding} alt="drop" className="w-[490px] h-[500px] object-cover"/>
      </div>
    </div>
    </div>
    </div>
    </div>
   
  )
}

export default FirstHalfOnlineDec