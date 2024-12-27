import React, { useState } from 'react';
import cardio_load from "../assets/cardio_load.png"
import Backbutton from './BackButton';

const MoreInfoElig = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const eligibilityItems = [
    { text: "Age between 18 and 65 years", image: cardio_load  },
    { text: "Weigh at least 50 kg",  image: cardio_load },
    { text: "Be in good health at the time of donation", image: cardio_load },
    { text: "No recent tattoos or piercings (6 months waiting period)", image: cardio_load }
  ];

  return (
    <div className="bg-customWhite min-h-screen p-4">
        <Backbutton/>
      {/* Eligibility Header */}
      <div className="text-center mb-12">
        <h1 className="text-customMaroon text-4xl lg:text-6xl font-bold leading-snug tracking-tight text-shadow-sm">
          Eligibility for Blood Donation
        </h1>
        <p className="text-customTextColor font-semibold text-lg lg:text-2xl mt-4">
          Ensure you meet the following criteria before donating blood.
        </p>
      </div>

      {/* Eligibility Details */}
      <div className="container mx-auto mt-8">
        <div className="flex flex-wrap justify-center lg:justify-between items-center">
          {eligibilityItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center w-48 lg:w-56 m-4">
              <div className="flex justify-center items-center rounded-full h-32 w-32 lg:h-56 lg:w-56 bg-white shadow-lg mb-4">
                <img src={item.image} alt="Icon" className="h-16 w-16 lg:h-24 lg:w-24" />
              </div>
              <span className="font-semibold text-shadow-sm text-lg lg:text-xl text-customTextColor text-center">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* See All Information Button */}
      <div className="flex justify-center items-center mt-10">
        <button
          onClick={toggleDetails}
          className="px-10 py-3 rounded-xl shadow-md bg-customBtn text-white font-semibold tracking-wide text-lg lg:text-3xl"
        >
          {showDetails ? "Hide Info" : "See all info"}
        </button>
      </div>

      {/* Detailed Information */}
      {showDetails && (
        <div className="mt-12">
          <h2 className="text-customMaroon text-3xl lg:text-5xl font-bold leading-snug tracking-tight text-shadow-sm">
            Detailed Eligibility Criteria
          </h2>
          <ul className="list-disc pl-6 mt-4 text-customTextColor text-lg lg:text-2xl">
            <li>
              <strong>Age:</strong> You must be at least 17 years old to donate to the general blood supply, or 16 years old with parental/guardian consent, if allowed by state law.
            </li>
            <li>
              <strong>Weight:</strong> You must weigh at least 110 pounds.
            </li>
            <li>
              <strong>Health Status:</strong> You must be in good health and feeling well at the time of donation.
            </li>
            <li>
              <strong>Recent Tattoos or Piercings:</strong> If you have recently had a tattoo or body piercing, you cannot donate for 6 months from the date of the procedure.
            </li>
            <li>
              <strong>Donation Frequency:</strong> Whole blood donations can be made every 56 days, up to 6 times a year.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MoreInfoElig;
