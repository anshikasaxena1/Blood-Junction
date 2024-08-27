import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Backbutton from './BackButton'
import { useLocation } from 'react-router-dom';
const CampPage = () => {
    const location = useLocation();
  const camp = location.state?.camp;
  cons
  return (
    <div className="w-full min-h-screen flex flex-col bg-customWhite">
      <Header/>
      <Backbutton/>
      <div>
      <h1>{camp?.name}</h1>
      <p>Location: {camp?.location}</p>
      <p>Status: {camp?.status}</p>
      <p>Date: {camp?.date}</p>
      <p>Time: {camp?.time}</p>
      <p>Phone: {camp?.phone}</p>
    </div>
      <Footer />
    </div>
  )
}

export default CampPage