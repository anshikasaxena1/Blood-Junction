import React from 'react';
import { FaCamera } from 'react-icons/fa';

const ProfilePictureUpload = ({ formData, handleChange, previewUrl }) => {
  return (
    <div className="mb-4 text-center">
      <div className="flex flex-col items-center">
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Profile preview"
            className="mb-2 w-20 h-20 rounded-full border-2 border-customMaroon"
          />
        ) : (
          <label
            htmlFor="profilePicture"
            className="cursor-pointer flex items-center justify-center w-16 h-16 rounded-full border-2 border-customMaroon bg-white text-customMaroon hover:bg-gray-100 transition-all"
          >
            <div className="flex items-center justify-center w-full h-full">
              <FaCamera className="text-3xl" />
            </div>
          </label>
        )}
        <p className="mt-2">Add a profile picture*</p>
        <label className="text-sm text-gray-500">You can change this later</label>
        <input
          type="file"
          accept="image/*"
          name="profilePicture"
          id="profilePicture"
          onChange={handleChange}
          required
          className="hidden"
        />
      </div>
    </div>
  );
};

export default ProfilePictureUpload;
