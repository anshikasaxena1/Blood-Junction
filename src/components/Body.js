
import React from 'react'
import Landing from './Landing'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Login from './Login'
import Signup from './Signup'
import UserProfile from './UserProfile'
import Donate from './Donate'
import HospitalLogin from './HospitalLogin'
import DonationCampLogin from './DonationCampLogin'
import EnterOTP from './EnterOTP'
import OrganiseCamp from './OrganiseCamp'
import Thanks from './Thanks'
import BloodCamps from './BloodCamps'
import CampPage from './CampPage'

const Body = () => {

    const appRouter=createBrowserRouter([
        {
            path:"/",
            element: <Landing/>
        },
        {
            path: "/campdetails",
            element: <CampPage />,
        },
        {
            path:"/organisecamp",
            element: <OrganiseCamp/>
        },
        {
            path:"/bloodcamps",
            element: <BloodCamps/>
        },
        {
            path:"/enterOTP",
            element: <EnterOTP/>
        },
        {
            path:"/donate",
            element: <Donate/>
        },
        {
            path:"/HospitalLogin",
            element: <HospitalLogin/>
        },
        {
            path:"/DonationCampLogin",
            element: <DonationCampLogin/>
        },
        {
            path:"/login",
            element: <Login/>
        },
        {
            path:"/signup",
            element: <Signup/>
        },
        {
            path:"/home",
            element:<Landing/>
        },
        {
            path:"/userProfile",
            element:<UserProfile/>
        },
        {
            path:"/thanks",
            element:<Thanks/>
        },
        
    ])


  return (
    <div >
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body