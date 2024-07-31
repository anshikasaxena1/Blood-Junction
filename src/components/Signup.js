import React, { useState } from "react";
import subtract from "../assets/Subtract.png";
import frame from "../assets/unsplash_TbRNeMjXCrU.png";
import arrow from "../assets/arrow_downward_alt.png";
import arrowDown from "../assets/arrow_forward_ios.png";
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Signup = () => {
  const [state, setState] = useState({
    phone: '',
    firstName: '',
    lastName: '',
    dateOfBirth: { day: '', month: '', year: '' },
    gender: '',
    bloodGroup: '',
    address: '',
    state: '',
    country: '',
    pincode: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleDateChange = (e, type) => {
    setState({
      ...state,
      dateOfBirth: { ...state.dateOfBirth, [type]: e.target.value }
    });
  };

  return (
    <div className="bg-[#f3e8ea] flex flex-col items-center w-full">
      <div className="bg-[#f3e8ea] w-full max-w-5xl p-8">
        <div className="relative">
          <div className="flex flex-col items-center mt-20">
            <div className="flex flex-col items-center mb-8">
              <div className="w-64 h-64 bg-white border-8 border-[#ffffff1a] shadow-md rounded-full mb-4"></div>
              <div className="text-xl font-semibold text-[#902f2f]">Add a profile picture*</div>
              <p className="text-sm font-semibold text-[#902f2f] opacity-50">You can change this later</p>
            </div>
            <div className="w-full max-w-xl grid grid-cols-1 gap-6">
              <div className="flex flex-col">
                <label className="text-xl font-semibold text-[#902f2f]">Name*</label>
                <div className="flex space-x-4">
                  <input type="text" name="firstName" placeholder="First name" className="input" onChange={handleInputChange} />
                  <input type="text" name="lastName" placeholder="Last name" className="input" onChange={handleInputChange} />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-xl font-semibold text-[#902f2f]">Phone*</label>
                <PhoneInput
                  country={'us'}
                  value={state.phone}
                  onChange={phone => setState({ ...state, phone })}
                  inputClass="input"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xl font-semibold text-[#902f2f]">Date of Birth*</label>
                <div className="flex space-x-4">
                  <input type="text" placeholder="DD" className="input" onChange={(e) => handleDateChange(e, 'day')} />
                  <input type="text" placeholder="MM" className="input" onChange={(e) => handleDateChange(e, 'month')} />
                  <input type="text" placeholder="YYYY" className="input" onChange={(e) => handleDateChange(e, 'year')} />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-xl font-semibold text-[#902f2f]">Gender*</label>
                <select name="gender" className="input" onChange={handleInputChange}>
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="preferNotToSay">Prefer not to say</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-xl font-semibold text-[#902f2f]">Your Blood Group*</label>
                <select name="bloodGroup" className="input" onChange={handleInputChange}>
                  <option value="">Select blood group</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-xl font-semibold text-[#902f2f]">Address*</label>
                <textarea name="address" placeholder="Permanent address" className="input h-24" onChange={handleInputChange}></textarea>
              </div>
              <div className="flex space-x-4">
                <div className="flex flex-col w-1/3">
                  <label className="text-xl font-semibold text-[#902f2f]">State*</label>
                  <select name="state" className="input" onChange={handleInputChange}>
                    <option value="">Select state</option>
                    {/* Add state options here */}
                  </select>
                </div>
                <div className="flex flex-col w-1/3">
                  <label className="text-xl font-semibold text-[#902f2f]">Country*</label>
                  <select name="country" className="input" onChange={handleInputChange}>
                    <option value="">Select country</option>
                    {/* Add country options here */}
                  </select>
                </div>
                <div className="flex flex-col w-1/3">
                  <label className="text-xl font-semibold text-[#902f2f]">Pincode*</label>
                  <input type="text" name="pincode" placeholder="Pincode" className="input" onChange={handleInputChange} />
                </div>
              </div>
            </div>
            <button className="mt-8 px-12 py-3 bg-[#c1121f] text-white text-3xl font-semibold rounded-xl shadow-md">Register</button>
          </div>
          <div className="absolute top-0 left-0 w-full h-96 bg-cover" style={{ backgroundImage: `url(${subtract})` }}></div>
          <div className="absolute top-20 right-10 text-[#c1121f] text-5xl font-bold">Bluud</div>
          <Link to="/" className="absolute top-20 left-20">
            <img src={arrow} alt="Back arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
