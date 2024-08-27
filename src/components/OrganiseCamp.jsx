import React from 'react'
import Header from "./Header"
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Backbutton from './BackButton'
import CampDetails from './CampDetails'
import LogisticsDet from './LogisticsDet'
import MedicalTeamInfo from './MedicalTeamInfo'
import SafetyAndComp from './SafetyAndComp'
import EmergencyContact from './EmergencyContact'




const OrganiseCamp = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-customWhite">
      
    <Header />
    <Backbutton/>
    <div className='ml-10 right-0  w-2/3 '>
    <h1 className='text-customMaroon mx-10  text-7xl font-bold  leading-snug tracking-normal text-shadow-md'>Donation Camp Details</h1>
    <h1 className='text-customMaroon text-shadow-sm  mx-10 font-bold'>You have to fill this undertaking online to be able to organise the camp and list on our platform.</h1>
    </div>
    <div className='mt-10'>
    <CampDetails/>
    </div>
    
      <LogisticsDet/>
    
    <MedicalTeamInfo/>
    <SafetyAndComp/>
    <EmergencyContact/>
    <div className='mx-10  items-center '>
    <input
     type="checkbox"
    name='yes'
      
    className="form-radio shadow-md text-red-600"
                />
    <span className=" text-customTextColor font-bold mb-2 mx-2 mt-4 ">Please review and confirm the information you have provided.</span>
    <p className='mx-10 mt-6 text-gray-700'>After submitting this form, call us to confirm your presence on our site as soon as possible in office timings</p>
    <Link to={'/thanks'}>
    <button className='w-full mt-14 mx-20 border-2 border-customRed bg-customBtn block  px-12 py-1 rounded-2xl shadow-md   text-white font-semibold tracking-wide text-3xl' >List and Organise</button>
    </Link>
    </div>
    
    <Footer />
  </div>
  

 
  )
}

export default OrganiseCamp