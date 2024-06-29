
import React from 'react'
import Landing from './Landing'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'

import Signup from './Signup'
import Home from './Home'

const Body = () => {

    const appRouter=createBrowserRouter([
        {
            path:"/",
            element: <Landing/>
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
            element:<Home/>
        },
        
    ])


  return (
    <div className='bg-customWhite'>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body