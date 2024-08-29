import React, { useState } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Backbutton from './BackButton.js';
import { useNavigate } from 'react-router-dom';

const BloodCamps = () => {
  const bloodCamps = [
    { name: "Bluud Donation", location: "123, Street 5, Badli, Delhi, India", status: "Ongoing", date: "1 July 2024", time: "10 a.m - 5p.m", phone: "123-456-7890" },
    { name: "College Bluud Fest", location: "123, Street 5, Varansi, UP, India", status: "Ended", date: "20 June 2024", time: "10 a.m - 5p.m", phone: "987-654-3210" },
    { name: "Simon’s Blood Drive", location: "123, Street 5, Lucknow, UP, India", status: "Upcoming", date: "12 July 2024", time: "10 a.m - 5p.m", phone: "555-123-4567" },
    { name: "Bluud Donation", location: "123, Street 5, Badli, Delhi, India", status: "Ongoing", date: "1 July 2024", time: "10 a.m - 5p.m", phone: "123-456-7890" },
    { name: "Bluud Donation", location: "123, Street 5, Varansi, UP, India", status: "Ended", date: "20 June 2024", time: "10 a.m - 5p.m", phone: "987-654-3210" },
    { name: "College Bluud Fest", location: "123, Street 5, Lucknow, UP, India", status: "Upcoming", date: "12 July 2024", time: "10 a.m - 5p.m", phone: "555-123-4567" },
    { name: "Bluud Donation", location: "123, Street 5, Badli, Delhi, India", status: "Ongoing", date: "1 July 2024", time: "10 a.m - 5p.m", phone: "123-456-7890" },
    { name: "Red Cross Blood Camp", location: "456, Park Avenue, Mumbai, Maharashtra, India", status: "Ongoing", date: "15 August 2024", time: "9 a.m - 4p.m", phone: "111-222-3333" },
    { name: "City Hospital Blood Drive", location: "789, Main Road, Pune, Maharashtra, India", status: "Upcoming", date: "25 August 2024", time: "11 a.m - 6p.m", phone: "222-333-4444" },
    { name: "Community Blood Donation", location: "321, North Street, Chennai, Tamil Nadu, India", status: "Ended", date: "5 July 2024", time: "10 a.m - 5p.m", phone: "333-444-5555" },
    { name: "Blood Donation Carnival", location: "456, East Boulevard, Kolkata, West Bengal, India", status: "Upcoming", date: "10 September 2024", time: "12 p.m - 7p.m", phone: "444-555-6666" },
    { name: "Help India Blood Drive", location: "987, South Lane, Jaipur, Rajasthan, India", status: "Ongoing", date: "3 August 2024", time: "9 a.m - 3p.m", phone: "555-666-7777" },
    { name: "Charity Blood Camp", location: "654, West End, Hyderabad, Telangana, India", status: "Ended", date: "30 July 2024", time: "8 a.m - 2p.m", phone: "666-777-8888" },
    { name: "Young Bloods Drive", location: "159, Hilltop Street, Bangalore, Karnataka, India", status: "Ongoing", date: "18 August 2024", time: "10 a.m - 5p.m", phone: "777-888-9999" },
    { name: "National Blood Donation", location: "852, Central Park, Patna, Bihar, India", status: "Upcoming", date: "20 August 2024", time: "9 a.m - 4p.m", phone: "888-999-0000" },
    { name: "Mega Blood Fest", location: "963, Seaside Road, Goa, India", status: "Ended", date: "7 July 2024", time: "11 a.m - 6p.m", phone: "999-000-1111" },
    { name: "Lifesavers Blood Drive", location: "741, Uptown Street, Chandigarh, India", status: "Ongoing", date: "29 July 2024", time: "10 a.m - 4p.m", phone: "000-111-2222" }
];


  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("All");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
    setIsOpen(false);
  };

  const [visibleCamps, setVisibleCamps] = useState(8);

  



  const filteredCamps = selectedStatus === "All"
    ? bloodCamps
    : bloodCamps.filter(camp => camp.status === selectedStatus);
    
  const campsToDisplay = filteredCamps.slice(0, visibleCamps);

  const loadMoreCamps = () => {
    setVisibleCamps(prevVisibleCamps => prevVisibleCamps + 10);
  };
  const navigate = useNavigate();
  const handleRowClick = (camp) => {
    navigate(`/campPage/${camp.name}`, { state: { camp: { ...camp } } });
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-customWhite">
      <Header />
      <Backbutton/>
      <div className="w-full min-h-screen bg-customWhite flex flex-col items-center px-4">
        {/* Title */}
        <h1 className="text-customMaroon mx-10 text-7xl font-bold leading-snug tracking-normal text-shadow-md">Blood Camps</h1>
        <p className="text-gray-700 text-xl font-medium mb-8">List of all available blood camps with their status</p>

        {/* Filters */}
        <div className="flex space-x-10 my-8">
          <button className="bg-white border border-gray-300 p-4 text-customMaroon font-bold py-2 px-6 m-8 rounded-full shadow-md">Select State</button>
          <button className="bg-white border border-gray-300 p-4 text-customMaroon font-bold py-2 px-6 m-8 rounded-full shadow-md">Select City</button>

          <div className="relative">
            <button onClick={toggleDropdown} className="bg-white border border-gray-300 p-4 text-customMaroon font-bold py-2 px-6 m-8 rounded-full shadow-md">
              {selectedStatus === "All" ? "Status" : selectedStatus}
            </button>
            {isOpen && (
              <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <button
                    href="#"
                    onClick={() => handleStatusChange("Ongoing")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Ongoing
                  </button>
                  <button
                    href="#"
                    onClick={() => handleStatusChange("Ended")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:w-full hover:bg-gray-100  hover:text-gray-900"
                    role="menuitem"
                  >
                    Ended
                  </button>
                  <button
                    href="#"
                    onClick={() => handleStatusChange("Upcoming")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Upcoming
                  </button>
                  <button
                    href="#"
                    onClick={() => handleStatusChange("All")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    All
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Table */}
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-md">
          <table className="min-w-full table-auto">
            <thead className="bg-customWhite">
              <tr>
                <th className="px-4 py-2 text-customMaroon text-left">Name</th>
                <th className="px-4 py-2 text-customMaroon text-left">Location</th>
                <th className="px-4 py-2 text-customMaroon text-left">Status</th>
                <th className="px-4 py-2 text-customMaroon text-left">Date</th>
                <th className="px-4 py-2 text-customMaroon text-left">Time</th>
              </tr>
            </thead>
            <tbody>
              {campsToDisplay.map((camp, index) => (
                <tr key={index} onClick={() => handleRowClick(camp)} className="my-2 bg-customWhite  border-2 border-customTextColor  rounded-md !important ">
                  <td className="px-4 py-2  text-customMaroon">{camp.name}</td>
                  <td className="px-4 py-2 text-customMaroon">{camp.location}</td>
                  <td className={`px-4 py-2 ${camp.status === 'Ongoing' ? 'text-lime-600' : camp.status === 'Ended' ? 'text-customRed' : 'text-gray-500'}`}>{camp.status}</td>
                  <td className="px-4 py-2 text-customMaroon">{camp.date}</td>
                  <td className="px-4 py-2 text-customMaroon">{camp.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Load More Button */}
        {visibleCamps < filteredCamps.length && (
          <button
            onClick={loadMoreCamps}
            className="mt-6 py-2 px-4 bg-white border border-gray-300 text-2xl text-customMaroon font-bold rounded-full shadow-md"
          >
            More
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BloodCamps;
