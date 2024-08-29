import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Backbutton from './BackButton'
import { useLocation } from 'react-router-dom';
import img1 from '../assets/unsplash_j_g42ZMeyzs.png'
import img2 from "../assets/unsplash_279xIHymPYY.png"
import img3 from '../assets/unsplash_maYeMl3xCrY.png'
import img4 from '../assets/unsplash_R4VUajOucGM.png'
import { Link } from 'react-router-dom';


const CampPage = () => {
    const location = useLocation();
    const camp = location.state?.camp;

    // const getHeadingText = (status) => {
    //   switch (status) {
    //     case 'Upcoming':
    //       return 'Register Now';
    //     case 'Ongoing':
    //       return 'Join the Camp';
    //     case 'Completed':
    //       return 'View Details';
    //     default:
    //       return 'Learn More';
    //   }
    // };
    const getButtonText = (status) => {
      switch (status) {
        case 'Upcoming':
          return 'Schedule Donation';
        case 'Ongoing':
          return 'Donate Now';
        case 'Completed':
          return 'Ended | Find More';
        default:
          return 'Learn More';
      }
    };
    const getLinkPath = (status) => {
      switch (status) {
        case 'Upcoming':
          return '/onlinedeclarationform';
        case 'Ongoing':
          return '/onlinedeclarationform';
        case 'Completed':
          return '/';
        default:
          return '/learn-more';
      }
    };
  return (
    <div className="w-full min-h-screen flex flex-col bg-customWhite">
      <Header/>
      <Backbutton/>
      <div className='mx-10 px-4 text-customMaroon font-bold tracking-wide leading-relaxed '>
        <div className='flex'>
      <h1 className='text-customMaroon mx-10 text-7xl font-bold my-4 leading-snug tracking-normal text-shadow-md'>{camp.name} </h1>
      {/*<button className='border-2 border-customShodowM p-0'>{getHeadingText(camp.status)}</button>*/}
      </div>
      <p className='mx-10 '> <span className='text-customRed font-bold py-2 px-6 my-4 '>Location:</span> {camp.location}</p>
      <p className='mx-10'><span className='text-customRed font-bold py-2 px-6 my-4 '>Status:</span> {camp.status}</p>
      <p className='mx-10 '><span className='text-customRed font-bold py-2 px-6 my-4 '>Date:</span> {camp.date}</p>
      <p className='mx-10'><span className='text-customRed font-bold py-2 px-6 my-4 '>Time:</span> {camp.time}</p>
      <p className='mx-10'><span className='text-customRed font-bold py-2 px-6 my-4 '>Phone:</span> {camp.phone}</p>
      <p className="text-gray-700 text-xl my-4 mx-10 font-medium mb-8 w-3/4">Before filling the form , first call and confirm to the team if they are still having the donation camp or not! We are not responsible for any inconvenience caused!!*</p>
      {/* Display other details here */}
    </div>
    <div className="bg-red-100 p-4 mx-10 rounded-md">
      <div className="flex mt-4">
        <div className="justify content-between">
          <img
            src={img2}
            alt="Main pic"
            className="w-auto h-auto object-cover rounded-md"
          />
        </div>


        <div >

        
        <div className="">
          <img
            src={img3}
            alt="Top Right pic"
            className="w-96 h-96 object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between items-center">
          <img
            src={img1}
            alt="Bottom Left pic"
            className="w-96 h-96 object-cover rounded-md"
          />
          <img
            src={img4}
            alt="Bottom Right pic"
            className="w-auto h-auto object-cover rounded-md"
          />
          </div>
        </div>
      </div>
    </div>
    <div className="mx-10">
  
    <Link to={getLinkPath(camp.status)}>
      <button className="w-full mt-14 border-2 border-customRed bg-customBtn block px-12 py-1 rounded-2xl shadow-md text-white font-semibold tracking-wide text-3xl">
      {getButtonText(camp.status)}
      </button>
    </Link>
    <p className="text-gray-700  text-lg my-4 mx-10 font-normal mb-8 w-full"><span className='font-medium ml-10'>NOTE :</span> First enquire on call and fill the form only after reaching the hospital or donation centre </p>
</div>


      <Footer />
    </div>
  )
}

export default CampPage