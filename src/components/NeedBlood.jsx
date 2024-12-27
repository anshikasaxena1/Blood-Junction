import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Backbutton from "./BackButton";

const NeedBlood = () => {
  // Example data
  const donors = [
    { name: "Yash Bhardwaj", location: "123, Street 5, Badli, Delhi, India", bloodGroup: "O+", lastDonated: "Less than 3 months" },
    { name: "Mikkel Neilsen", location: "123, Street 5, Varanasi, UP, India", bloodGroup: "AB+", lastDonated: "More than 3 months" },
    { name: "Anshika Saxena", location: "123, Street 5, Lucknow, UP, India", bloodGroup: "B+", lastDonated: "More than 3 months" },
    { name: "Yash Bhardwaj", location: "123, Street 5, Badli, Delhi, India", bloodGroup: "O+", lastDonated: "Less than 3 months" },
    { name: "Divyanshu Singh", location: "123, Street 5, Varanasi, UP, India", bloodGroup: "AB+", lastDonated: "More than 3 months" },
    { name: "Anshika Saxena", location: "123, Street 5, Lucknow, UP, India", bloodGroup: "B+", lastDonated: "More than 3 months" },
    { name: "Yash Bhardwaj", location: "123, Street 5, Badli, Delhi, India", bloodGroup: "O+", lastDonated: "Less than 3 months" },
  ];

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("");
  const [showAll, setShowAll] = useState(false);

  const states = ["Delhi", "Uttar Pradesh", "Maharashtra", "Karnataka", "Gujarat"];
  const cities = ["New Delhi", "Lucknow", "Mumbai", "Bangalore", "Ahmedabad"];
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleStateChange = (event) => setSelectedState(event.target.value);
  const handleCityChange = (event) => setSelectedCity(event.target.value);
  const handleBloodGroupChange = (event) => setSelectedBloodGroup(event.target.value);

  const handleShowMore = () => setShowAll(!showAll);

  return (
    <div className="w-full min-h-screen flex flex-col bg-customWhite">
      <Header />
      <Backbutton />
      <div className="w-full flex flex-col items-center px-4">
        <h1 className="text-customMaroon text-3xl md:text-5xl lg:text-7xl font-bold leading-snug tracking-normal text-shadow-md text-center">
          All Donors
        </h1>
        <p className="text-gray-700 text-sm md:text-lg font-medium text-center">
          List of all available blood donors and facilities.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mt-6 mb-8">
          <select
            value={selectedState}
            onChange={handleStateChange}
            className="bg-customWhiteInside rounded-full py-2 px-4 border-customWhite shadow-md text-customMaroon font-semibold text-sm md:text-xl cursor-pointer focus:outline-none"
          >
            <option value="" disabled>Select State</option>
            {states.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>

          <select
            value={selectedCity}
            onChange={handleCityChange}
            className="bg-customWhiteInside rounded-full py-2 px-4 border-customWhite shadow-md text-customMaroon font-semibold text-sm md:text-xl cursor-pointer focus:outline-none"
          >
            <option value="" disabled>Select City</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>

          <select
            value={selectedBloodGroup}
            onChange={handleBloodGroupChange}
            className="bg-customWhiteInside rounded-full py-2 px-4 border-customWhite shadow-md text-customMaroon font-semibold text-sm md:text-xl cursor-pointer focus:outline-none"
          >
            <option value="" disabled>Select Blood Group</option>
            {bloodGroups.map((bloodGroup, index) => (
              <option key={index} value={bloodGroup}>
                {bloodGroup}
              </option>
            ))}
          </select>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto">
          <table className="table-auto w-full text-left rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-2 text-customRed text-sm md:text-base">Name</th>
                <th className="px-4 py-2 text-red-600 text-sm md:text-base">Location</th>
                <th className="px-4 py-2 text-red-600 text-sm md:text-base">Blood Group</th>
                <th className="px-4 py-2 text-red-600 text-sm md:text-base">Last Donated</th>
              </tr>
            </thead>
            <tbody>
              {donors.slice(0, showAll ? donors.length : 6).map((donor, index) => (
                <tr key={index} className="bg-pink-200 shadow-md my-2 p-4 rounded-lg">
                  <td className="px-4 py-2 text-customMaroon font-semibold">{donor.name}</td>
                  <td className="px-4 py-2 text-customMaroon">{donor.location}</td>
                  <td className="px-4 py-2 text-customMaroon">{donor.bloodGroup}</td>
                  <td
                    className={`px-4 py-2 ${
                      donor.lastDonated.includes("More") ? "text-green-600" : "text-red-600"
                    }`}
                  >
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
            className="bg-pink-200 rounded-full py-2 px-6 text-black text-sm md:text-base"
            onClick={handleShowMore}
          >
            {showAll ? "Show Less" : "More"}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NeedBlood;
