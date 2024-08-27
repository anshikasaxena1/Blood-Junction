import React from 'react';

const BloodGroupInput = ({ formData, handleChange }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2">Blood Group:</label>
      <select
        name="bloodGroup"
        value={formData.bloodGroup}
        onChange={handleChange}
        required
        className=" px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
      </select>
    </div>
  );
};

export default BloodGroupInput;
