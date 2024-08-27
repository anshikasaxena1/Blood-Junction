import React from 'react';

const GenderInput = ({ formData, handleChange }) => {
  const handleOptionClick = (value) => {
    handleChange({
      target: {
        name: 'gender',
        value: value,
      },
    });
  };

  return (
    <div className="mb-4">
      <label className="block mb-2">Gender:</label>
      <div className="flex space-x-4">
        <button
          type="button"
          onClick={() => handleOptionClick('male')}
          className={`px-4 py-2 border rounded-md ${
            formData.gender === 'male' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 border-gray-300'
          } hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        >
          Male
        </button>
        <button
          type="button"
          onClick={() => handleOptionClick('female')}
          className={`px-4 py-2 border rounded-md ${
            formData.gender === 'female' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 border-gray-300'
          } hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        >
          Female
        </button>
        <button
          type="button"
          onClick={() => handleOptionClick('prefer_not_to_say')}
          className={`px-4 py-2 border rounded-md ${
            formData.gender === 'prefer_not_to_say' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 border-gray-300'
          } hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        >
          Prefer not to say
        </button>
      </div>
    </div>
  );
};

export default GenderInput;
