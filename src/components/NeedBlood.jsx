import React,{useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import Backbutton from './BackButton'
const NeedBlood = () => {
    
  // Example data
  const donors = [
    { name: 'Yash Bhardwaj', location: '123, Street 5, Badli, Delhi, India', bloodGroup: 'O+', lastDonated: 'Less than 3 months' },
    { name: 'Mikkel Neilsen', location: '123, Street 5, Varanasi, UP, India', bloodGroup: 'AB+', lastDonated: 'More than 3 months' },
    { name: 'Anshika Saxena', location: '123, Street 5, Lucknow, UP, India', bloodGroup: 'B+', lastDonated: 'More than 3 months' },
    { name: 'Yash Bhardwaj', location: '123, Street 5, Badli, Delhi, India', bloodGroup: 'O+', lastDonated: 'Less than 3 months' },
    { name: 'Divyanshu Singh', location: '123, Street 5, Varanasi, UP, India', bloodGroup: 'AB+', lastDonated: 'More than 3 months' },
    { name: 'Anshika Saxena', location: '123, Street 5, Lucknow, UP, India', bloodGroup: 'B+', lastDonated: 'More than 3 months' },
    { name: 'Yash Bhardwaj', location: '123, Street 5, Badli, Delhi, India', bloodGroup: 'O+', lastDonated: 'Less than 3 months' }
  ];

  // States for dropdowns
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('');

  // Data for dropdowns
  const states = ['Delhi', 'Uttar Pradesh', 'Maharashtra', 'Karnataka', 'Gujarat'];
  const cities = ['New Delhi', 'Lucknow', 'Mumbai', 'Bangalore', 'Ahmedabad'];
  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  // Handlers for each dropdown
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleBloodGroupChange = (event) => {
    setSelectedBloodGroup(event.target.value);
  };

  // Pagination state
  const [showAll, setShowAll] = useState(false);

  // Toggle pagination
  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-customWhite">
    <Header />
    <Backbutton/>
    
    <div className="w-full min-h-screen bg-customWhite flex flex-col items-center px-4">
    <h1 className="text-customMaroon mx-10 text-7xl font-bold leading-snug tracking-normal text-shadow-md">All Donors</h1>
    <p className="text-gray-700 text-xl font-medium ">List of all available blood donors and facilities.</p>
    
    <div className="px-8">
      {/* Filters */}
      <div className="flex justify-around mb-6 mt-14">
        {/* State Dropdown */}
      <div className="relative inline-block text-left bg-customWhite">
        <select
          value={selectedState}
          onChange={handleStateChange}
          className=" bg-customWhiteInside rounded-full py-2 px-4 mx-8  border-customWhite shadow-md text-customMaroon font-semibold text-xl cursor-pointer focus:outline-none"
        >
          <option value="" disabled>Select State</option>
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      {/* City Dropdown */}
      <div className="relative inline-block text-left">
        <select
          value={selectedCity}
          onChange={handleCityChange}
          className="bg-customWhiteInside rounded-full py-2 px-4 mx-8  border-customWhite shadow-md text-customMaroon font-semibold text-xl cursor-pointer focus:outline-none"
        >
          <option value="" disabled>Select City</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Blood Group Dropdown */}
      <div className="relative inline-block text-left">
        <select
          value={selectedBloodGroup}
          onChange={handleBloodGroupChange}
          className="bg-customWhiteInside rounded-full py-2 px-4 mx-8  border-customWhite shadow-md text-customMaroon font-semibold text-xl cursor-pointer focus:outline-none"
        >
          <option value="" disabled>Select Blood Group</option>
          {bloodGroups.map((bloodGroup, index) => (
            <option key={index} value={bloodGroup}>
              {bloodGroup}
            </option>
          ))}
        </select>
      </div>
      </div>

      {/* Table */}
      <div className='mt-8'>
      <table className="w-full table-auto text-left rounded-lg ">
        <thead  >
          <tr>
            <th className="px-6 py-3 text-customRed">Name</th>
            <th className="px-6 py-3 text-red-600">Location</th>
            <th className="px-6 py-3 text-red-600">Blood Group</th>
            <th className="px-6 py-3 text-red-600">Last Donated</th>
          </tr>
        </thead>
        <tbody>
          {donors.slice(0, showAll ? donors.length : 6).map((donor, index) => (
            <tr key={index} className="bg-pink-200 shadow-md my-2 p-4   rounded-lg">
              <td className="px-6 py-4 text-customMaroon font-semibold ">{donor.name}</td>
              <td className="px-6 py-4 text-customMaroon">{donor.location}</td>
              <td className="px-6 py-4 text-customMaroon">{donor.bloodGroup}</td>
              <td className={`px-6 py-4 ${donor.lastDonated.includes('More') ? 'text-green-600' : 'text-red-600'}`}>
                {donor.lastDonated}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      {/* More button */}
      <div className="flex justify-center mt-6">
        <button 
          className="bg-pink-200 rounded-full py-2 px-6 text-black" 
          onClick={handleShowMore}>
          {showAll ? 'Show Less' : 'More'}
        </button>
      </div>
      </div>
    </div>
    
    <Footer />
  </div>
  )
}

export default NeedBlood