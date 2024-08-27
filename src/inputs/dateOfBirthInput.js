import React from 'react';

const DateOfBirthInput = ({ formData, handleChange }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2">Date of Birth:</label>
      <div className="flex space-x-2">
        <input
          type="text"
          name="day"
          value={formData.day}
          onChange={handleChange}
          placeholder="DD"
          maxLength="2"
          required
          className="w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <input
          type="text"
          name="month"
          value={formData.month}
          onChange={handleChange}
          placeholder="MM"
          maxLength="2"
          required
          className="w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <input
          type="text"
          name="year"
          value={formData.year}
          onChange={handleChange}
          placeholder="YYYY"
          maxLength="4"
          required
          className="w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default DateOfBirthInput;
