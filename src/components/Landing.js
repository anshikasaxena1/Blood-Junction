import React from 'react'
import Header from "./Header"
import Footer from './Footer'
import Main from './MainContent'


const Landing = () => {
  return (
   
    <div className="w-full min-h-screen flex flex-col bg-customWhite">
    <Header />
    <main className="flex-grow">
      <Main/>
    </main>
    <Footer />
  </div>
 
  )
}

export default Landing