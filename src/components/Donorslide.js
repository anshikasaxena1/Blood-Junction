import React from 'react';
import '../scrollbar.css';
import dummyData from '../utils/dummyData.json';

const Donorslide = () => {
  return (
    <div>
      {/* Horizontal Scrolling Section */}
      <div className="flex justify-center items-center w-full h-full overflow-x-auto mt-8">
        <ul className="flex overflow-x-scroll scrollbar-hide whitespace-nowrap">
          {dummyData.map((user) => (
            <li key={user.id} className="mx-4">
              <div className="h-60 w-56 flex-none text-white m-2">
                {/* Donor Image */}
                <img
                  src={user.picture}
                  alt={user.name}
                  className="w-40 h-40 rounded-full mx-auto"
                />
                {/* Donor Name and Units */}
                <div className="text-center mt-4">
                  <span className="text-customMaroon font-semibold text-lg block">
                    {user.first_name} {user.last_name}
                  </span>
                  <span className="text-gray-600 text-sm">
                    {user.units} units
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Button Section */}
      <div className="flex justify-center items-center mt-10">
        <button className="px-8 py-3 rounded-xl shadow-md bg-customBtn text-white font-semibold tracking-wide text-xl hover:bg-customBtnHover transition duration-300">
          All Donors List
        </button>
      </div>
    </div>
  );
};

export default Donorslide;
