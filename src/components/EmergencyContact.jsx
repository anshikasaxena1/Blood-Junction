import React from 'react'
import PhoneInput from 'react-phone-input-2';
const EmergencyContact = () => {
  return (
    <div>
        <div className='ml-10 right-0  w-2/3 '>
    <h1 className='text-customMaroon mx-10  text-7xl font-bold  leading-snug tracking-normal text-shadow-md'>Emergency Contact Information</h1>
    <h1 className='text-black  mx-10 font-semibold'>Emergency contact info to avoid any conflict and have seamless donation</h1>
    <form>
        <div className='max-w-xl mx-auto p-8'>
        <p className='font-medium text-customTextColor' >Emergency Contact Name*</p>
      
      <input type="text" className='rounded-md shadow-md' placeholder='First name '/>
      <input type="text" className='rounded-md mx-5 shadow-md' placeholder='Last name'/>

      <label className="block text-customTextColor font-medium mb-2 mt-4">Emergency Contact Phone Number 1*</label>
      <div className='w-1/2'>
    <PhoneInput
              country={'in'}
              
              inputClass="w-full block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              
            />
    </div>
    <label className="block text-customTextColor font-medium mb-2 mt-4">Emergency Contact Phone Number 2*</label>
      <div className='w-1/2'>
    <PhoneInput
              country={'in'}
              
              inputClass="w-full block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              
            />
    </div>
    <label className="block text-customTextColor font-medium mb-2 mt-4">Emergency Contact Phone Number 3*</label>
      <div className='w-1/2'>
    <PhoneInput
              country={'in'}
              
              inputClass="w-full block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              
            />
    </div>
        </div>
        
        
    </form>
    <div className="border-t-2 border-dashed  border-customRed min-w-full h-1 py-5 mt-14"></div>
    </div>
    </div>
  )
}

export default EmergencyContact