import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import { submitSignup } from '../actions/signUpActions';
import 'react-phone-input-2/lib/style.css';
import 'tailwindcss/tailwind.css';
import ProfilePictureUpload from '../inputs/profilePictureInput';
import DateOfBirthInput from '../inputs/dateOfBirthInput';
import GenderInput from '../inputs/genderInput';
import BloodGroupInput from '../inputs/bloodGroupInputs';
import AddressInput from '../inputs/addressInputs';
import LayerHeader from './LayerHeader';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    profilePicture: null,
    day: '',
    month: '',
    year: '',
    gender: '',
    bloodGroup: '',
    address: '',
    
    state: '',
    country: '',
    pincode: '',
  });

  const [previewUrl, setPreviewUrl] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profilePicture') {
      const file = files[0];
      setFormData({ ...formData, [name]: file });
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phone: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSubmit = new FormData();
    
    // Append the necessary fields
    dataToSubmit.append('firstName', formData.firstName);
    dataToSubmit.append('lastName', formData.lastName);
    dataToSubmit.append('phone', formData.phone);
    dataToSubmit.append('profilePicture', formData.profilePicture);
    dataToSubmit.append('dateOfBirth', `${formData.day}-${formData.month}-${formData.year}`);
    dataToSubmit.append('gender', formData.gender);
    dataToSubmit.append('bloodGroup', formData.bloodGroup);
    dataToSubmit.append('address', formData.address);
    dataToSubmit.append('state', formData.state);
    dataToSubmit.append('country', formData.country);
    dataToSubmit.append('pincode', formData.pincode);
  
    dispatch(submitSignup(dataToSubmit));
    
    // Reset form logic here
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      profilePicture: null,
      day: '',
      month: '',
      year: '',
      gender: '',
      bloodGroup: '',
      address: '',
      state: '',
      country: '',
      pincode: '',
    });
    setPreviewUrl(null);
    navigate('/');
  };
  

  return (
    <div>
      <LayerHeader link={"/"}/>
    <div className="bg-bgPink  items-center justify-center flex flex-col ">
     
      <div className="bg-white rounded-lg p-8 shadow-md h-5/6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Register Form</h2>
        <form onSubmit={handleSubmit}>
          <ProfilePictureUpload
            formData={formData}
            handleChange={handleChange}
            previewUrl={previewUrl}
          />
          <label className="block mb-2">Name*</label>
          <div className="mb-4">

            <input
              type="text"
              name="firstName"
              placeholder='First name'
              value={formData.firstName}
              onChange={handleChange}
              required
              className=" px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <input
              type="text"
              name="lastName"
              placeholder='Last name'
              value={formData.lastName}
              onChange={handleChange}
              required
              className=" px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Phone:</label>
            <PhoneInput
              country={'in'}
              value={formData.phone}
              onChange={handlePhoneChange}
              inputClass="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              containerClass="w-full"
            />
          </div>
          <DateOfBirthInput formData={formData} handleChange={handleChange} />
          <GenderInput formData={formData} handleChange={handleChange} />
          <BloodGroupInput formData={formData} handleChange={handleChange} />
          <AddressInput formData={formData} handleChange={handleChange} />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-customBtn text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SignupForm;