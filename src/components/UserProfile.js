import React from 'react'
import LayerHeader from './LayerHeader'
import Footer from './Footer'
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const user = useSelector((state) => state.signup.user);
  const profilePictureUrl = user.profilePicture;
  return (
    <div className='bg-bgPink w-screen'>
      <div className='w-screen overflow-hidden'>
      <LayerHeader/>
      </div>
      <div className='bg-bgPink'>
      
                    <img
                      src={profilePictureUrl}
                      alt="Profile"
                      className='shadow-md shadow-customMaroon mx-2 inline'
                      style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                    />
                
        hola
      </div>
      <Footer/>
        
    </div>
  )
}

export default UserProfile