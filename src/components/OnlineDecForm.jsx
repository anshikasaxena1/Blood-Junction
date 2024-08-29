import React from 'react'
import Header from "./Header"
import Backbutton from './BackButton'
import Footer from './Footer'
import FirstHalfOnlineDec from './FirstHalfOnlineDec'

const OnlineDecForm = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-customWhite">
        <Header/>
        <Backbutton/>
        <FirstHalfOnlineDec/>
        <Footer/>

    </div>
  )
}

export default OnlineDecForm