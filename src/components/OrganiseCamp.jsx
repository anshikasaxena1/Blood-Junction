import React from 'react';
import Header from "./Header";
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Backbutton from './BackButton';
import CampDetails from './CampDetails';
import LogisticsDet from './LogisticsDet';
import MedicalTeamInfo from './MedicalTeamInfo';
import SafetyAndComp from './SafetyAndComp';
import EmergencyContact from './EmergencyContact';

const OrganiseCamp = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-customWhite">
      <Header />
      <Backbutton />

      <div className="px-6 lg:px-12 xl:px-20">
        {/* Title Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-customMaroon text-4xl lg:text-6xl font-bold leading-snug tracking-normal text-shadow-md">
            Donation Camp Details
          </h1>
          <h2 className="text-customMaroon text-shadow-sm mt-4 text-lg lg:text-xl font-bold">
            You have to fill this undertaking online to be able to organise the camp and list on our platform.
          </h2>
        </div>

        {/* Form Sections */}
        <div className="mt-10 space-y-8">
          <CampDetails />
          <LogisticsDet />
          <MedicalTeamInfo />
          <SafetyAndComp />
          <EmergencyContact />
        </div>

        {/* Confirmation Section */}
        <div className="mt-12 space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="yes"
              className="form-checkbox shadow-md text-red-600"
            />
            <span className="text-customTextColor font-bold ml-2">
              Please review and confirm the information you have provided.
            </span>
          </div>
          <p className="text-gray-700">
            After submitting this form, call us to confirm your presence on our site as soon as possible in office timings.
          </p>

          {/* Button */}
          <Link to={'/thanks'}>
            <button
              className="w-full lg:w-auto mt-6 px-6 py-3 bg-customBtn border-2 border-customRed rounded-2xl shadow-md text-white font-semibold tracking-wide text-xl lg:text-2xl hover:bg-customRed transition-all"
            >
              List and Organise
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrganiseCamp;
