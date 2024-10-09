import React, { useState } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Backbutton from './BackButton.js';
import { useNavigate } from 'react-router-dom';

const Hospitals = () => {
  // Replace with hospitals details
  const hospitals = [
    {
      name: "Drek’s Hospital",
      location: "123, Street 5, Badli, Delhi, India",
      needs: "Whole Blood",
      requestDate: "20 June 2024",
      details: "This hospital is known for its excellent blood donation services and emergency care.",
    },
    {
      name: "Avanti Hospital",
      location: "123, Street 5, Varanasi, UP, India",
      needs: "Red Blood Cells",
      requestDate: "20 June 2024",
      details: "Avanti Hospital specializes in blood treatments and donation drives across UP.",
    },
    {
      name: "Max Hospital",
      location: "123, Street 5, Lucknow, UP, India",
      needs: "Platelets",
      requestDate: "12 July 2024",
      details: "Max Hospital has state-of-the-art facilities for blood donation and transfusions.",
    },
    {
      name: "City Care Hospital",
      location: "789, Main Road, Pune, Maharashtra, India",
      needs: "Plasma",
      requestDate: "25 August 2024",
      details: "City Care provides extensive blood treatment options and specializes in plasma therapy.",
    },
    {
      name: "Red Cross Hospital",
      location: "456, Park Avenue, Mumbai, Maharashtra, India",
      needs: "Whole Blood",
      requestDate: "15 August 2024",
      details: "This hospital is known for hosting frequent blood donation camps and services.",
    },
    {
      name: "Community Health Clinic",
      location: "321, North Street, Chennai, Tamil Nadu, India",
      needs: "Red Blood Cells",
      requestDate: "5 July 2024",
      details: "The clinic is focused on community health and organizes regular blood donation drives.",
    },
    {
      name: "Apollo Hospital",
      location: "963, Seaside Road, Goa, India",
      needs: "Platelets",
      requestDate: "7 July 2024",
      details: "Apollo Hospital in Goa is a leading center for platelet donation and research.",
    },
    {
      name: "MedLife Hospital",
      location: "852, Central Park, Patna, Bihar, India",
      needs: "Plasma",
      requestDate: "20 August 2024",
      details: "MedLife Hospital frequently requests plasma for treating critical patients.",
    },
    {
      name: "Life Care Medical Center",
      location: "987, South Lane, Jaipur, Rajasthan, India",
      needs: "Whole Blood",
      requestDate: "3 August 2024",
      details: "Life Care Medical Center offers round-the-clock emergency blood donation services.",
    },
    {
      name: "Global Hospital",
      location: "654, West End, Hyderabad, Telangana, India",
      needs: "Red Blood Cells",
      requestDate: "30 July 2024",
      details: "Global Hospital is a well-known institution for advanced blood transfusion techniques.",
    },
    {
      name: "HealWell Hospital",
      location: "741, Uptown Street, Chandigarh, India",
      needs: "Whole Blood",
      requestDate: "29 July 2024",
      details: "HealWell specializes in complex surgeries and requires regular blood supplies.",
    },
    {
      name: "Sunrise Hospital",
      location: "963, Highland Road, Shimla, Himachal Pradesh, India",
      needs: "Plasma",
      requestDate: "10 August 2024",
      details: "Sunrise Hospital regularly seeks plasma for patients undergoing treatment for rare conditions.",
    },
    {
      name: "National Health Center",
      location: "159, Green Hills, Bangalore, Karnataka, India",
      needs: "Platelets",
      requestDate: "18 August 2024",
      details: "National Health Center organizes platelet donation drives for cancer patients.",
    },
    {
      name: "CarePlus Hospital",
      location: "456, River Side, Kolkata, West Bengal, India",
      needs: "Red Blood Cells",
      requestDate: "10 September 2024",
      details: "CarePlus Hospital is a critical care center with high demand for blood donations.",
    },
    {
      name: "Good Health Hospital",
      location: "753, East Valley, Guwahati, Assam, India",
      needs: "Plasma",
      requestDate: "15 September 2024",
      details: "Good Health Hospital regularly treats patients with plasma therapy.",
    },
    {
      name: "Fortis Hospital",
      location: "123, Capital Road, Bhopal, Madhya Pradesh, India",
      needs: "Whole Blood",
      requestDate: "22 July 2024",
      details: "Fortis Hospital is a leader in emergency blood transfusion and urgent care services.",
    },
    {
      name: "LifeLine Hospital",
      location: "963, Ocean Drive, Kochi, Kerala, India",
      needs: "Platelets",
      requestDate: "28 August 2024",
      details: "LifeLine Hospital is known for treating patients with complex blood-related disorders.",
    },
    {
      name: "Hope Hospital",
      location: "654, South Harbor, Visakhapatnam, Andhra Pradesh, India",
      needs: "Plasma",
      requestDate: "12 August 2024",
      details: "Hope Hospital frequently requests plasma for treating various critical conditions.",
    },
    {
      name: "Sanjeevani Hospital",
      location: "987, Hill View, Ranchi, Jharkhand, India",
      needs: "Red Blood Cells",
      requestDate: "7 August 2024",
      details: "Sanjeevani Hospital offers both urban and rural blood donation services.",
    },
    {
      name: "Noble Heart Hospital",
      location: "321, Royal Avenue, Thiruvananthapuram, Kerala, India",
      needs: "Whole Blood",
      requestDate: "30 September 2024",
      details: "Noble Heart Hospital is focused on cardiac surgeries and has a high demand for blood donations.",
    },
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

  const [visibleHospitals, setVisibleHospitals] = useState(8);

  const filteredHospitals = selectedStatus === "All"
    ? hospitals
    : hospitals.filter(hospital => hospital.needs === selectedStatus);

  const hospitalsToDisplay = filteredHospitals.slice(0, visibleHospitals);

  const loadMoreHospitals = () => {
    setVisibleHospitals(prevVisibleHospitals => prevVisibleHospitals + 10);
  };

  const navigate = useNavigate();
  const handleRowClick = (hospital) => {
    navigate(`/hospitalPage/${hospital.name}`, { state: { hospital: { ...hospital } } });
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-customWhite">
      <Header />
      <Backbutton/>
      <div className="w-full min-h-screen bg-customWhite flex flex-col items-center px-4">
        {/* Title */}
        <h1 className="text-customMaroon mx-10 text-7xl font-bold leading-snug tracking-normal text-shadow-md">Hospitals</h1>
        <p className="text-gray-700 text-xl font-medium mb-8">List of all available hospitals with their details</p>

        {/* Filters */}
        <div className="flex space-x-10 my-8">
          <button className="bg-white border border-gray-300 p-4 text-customMaroon font-bold py-2 px-6 m-8 rounded-full shadow-md">Select State</button>
          <button className="bg-white border border-gray-300 p-4 text-customMaroon font-bold py-2 px-6 m-8 rounded-full shadow-md">Select City</button>

          <div className="relative">
            <button onClick={toggleDropdown} className="bg-white border border-gray-300 p-4 text-customMaroon font-bold py-2 px-6 m-8 rounded-full shadow-md">
              {selectedStatus === "All" ? "Need" : selectedStatus}
            </button>
            {isOpen && (
              <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <button
                    onClick={() => handleStatusChange("Whole Blood")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Whole Blood
                  </button>
                  <button
                    onClick={() => handleStatusChange("Platelets")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Platelets
                  </button>
                  <button
                    onClick={() => handleStatusChange("Red Blood Cells")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Red Blood Cells
                  </button>
                  <button
                    onClick={() => handleStatusChange("Plasma")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Plasma
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
                <th className="px-4 py-2 text-customMaroon text-left">Needs</th>
                <th className="px-4 py-2 text-customMaroon text-left">Request Date</th>       
              </tr>
            </thead>
            <tbody>
              {hospitalsToDisplay.map((hospital, index) => (
                <tr key={index} onClick={() => handleRowClick(hospital)} className="my-2 bg-customWhite border-2 border-customTextColor rounded-md !important ">
                  <td className="px-4 py-2 text-customMaroon">{hospital.name}</td>
                  <td className="px-4 py-2 text-customMaroon">{hospital.location}</td>
                  <td className={`px-4 py-2 ${hospital.status === 'Whole Blood' ? 'text-lime-600' : hospital.status === 'Red Blood Cells' ? 'text-customRed':hospital.status === 'Platelets' ? 'text-red-600' :hospital.status === 'Double Red Cells' ? 'text-red-600': 'text-gray-500'}`}>{hospital.needs}</td>
                  <td className="px-4 py-2 text-customMaroon">{hospital.requestDate}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Load More Button */}
        {visibleHospitals < filteredHospitals.length && (
          <button
            onClick={loadMoreHospitals}
            className="mt-6 py-2 px-4 bg-white border border-gray-300 text-2xl text-customMaroon font-bold rounded-full shadow-md"
          >
            More
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Hospitals;
