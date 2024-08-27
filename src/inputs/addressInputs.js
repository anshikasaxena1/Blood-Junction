import React from 'react';

const AddressInput = ({ formData, handleChange }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2">Address:</label>
      <input
        type="text"
        name="address"
        placeholder='Permanent address'
        value={formData.address}
        onChange={handleChange}
        required
        className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      
      <label className="block mb-2">State:</label>
      <input
        type="text"
        name="state"
        value={formData.state}
        onChange={handleChange}
        required
        className=" px-3 py-2 mb-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      <label className="block mb-2">Country:</label>
      <input
        type="text"
        name="country"
        value={formData.country}
        onChange={handleChange}
        required
        className="px-3 py-2 mb-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      <label className="block mb-2">Pincode:</label>
      <input
        type="text"
        name="pincode"
        value={formData.pincode}
        onChange={handleChange}
        required
        className=" px-3 py-2 mb-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  );
};

export default AddressInput;
